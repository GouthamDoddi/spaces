class App::Services::Reports < App::Services::Base

  

  def entities
    data = Entity.where(id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]).map do |e|
      { name: e.name,
        name_ar: e.ar_name,
        id: e.id, 
        description: e.notes, 
        completed: rand(1..20), 
        wip: rand(1..30), 
        not_started: rand(1..30),
        prog: rand(50..90) 
      }
    end

    return_success(data)
  end

  def projects
    data = DbProject.where(entity_id: rp[:entity_id].to_s).map do |e|
      { 
        name: e.name,
        id: e.id, 
      }
    end
    return_success(data)
  end
  # def projects
  #   data = Compliance::Project.where(owner_id: rp[:entity_id]).map do |e|
  #     { 
  #       name: e.name,
  #       id: e.id, 
  #     }
  #   end
  #   return_success(data)
  # end
  
  def project_report
    project = Compliance::Project.eager(:record_parameters)[rp[:project_id]]
    resp = { name: project.name, description: project.description }

    attributes = project.applied_attributes.eager(:parameters).all

    parameters = attributes.reduce([]){|s, o| s += o.parameters }

    variations_count = begin 
      pids = project.record_parameters.map(&:parameter_id)
      pids.length - pids.uniq.length
    end

    resp.merge!(
      total_parameters_count: (parameters.length + variations_count), 
      parameters_completed:  project.record_parameters.select{|o| o.closed? || o.in_review?}
    )
  end


  def entity_report
    entity = Entity.for_report(rp[:entity_id])

    resp = { name: entity.name, description: entity.description, 
      progress: entity.progress, score: entity.score  
    }

    resp[:projects] = entity.projects.map do |p|
      {
        id: p.id,
        name: p.name, description: p.description,
        progress: p.progress, score: p.score,

      }
    end

    # resp[:sections]
    sorted = resp[:projects].sort{|a,b| a[:score] <=> b[:score]}

    resp[:low_projects] = [
      {name: 'Search', score: 12},
      {name: 'E-Payment', score: 20},
      {name: 'Search Engine Optimization (SEO)', score: 14},
      {name: 'E-Services Management', score: 30},
      {name: 'Layout', score: 8},
    ]
    resp[:high_projects] = [
      {name: 'Security and Privacy', score: 12},
      {name: 'E-Service Technical Standards', score: 20},
      {name: 'E-Services Functionality', score: 32},
      {name: 'Stylesheet', score: 30},
      {name: 'Support (chat/helpline)', score: 17},
    ]
    return_success(resp)
  end


  def state_report
    resp = { name: 'Jawda', description: 'Qatar Digital Government (QDG) is a cross-governmental, stakeholder-led initiative formed to foster cooperation and champion the cause of digital government in Qatar.'}
    entities = Entity.for_report
    
    
    resp[:entities] = entities.map do |entity|
      { id: entity.id, name: entity.name, description: entity.description, name_ar: entity.ar_name,
        projects: entity.projects_status,
        score: entity.projects.present? ? (entity.projects.sum{|p| p.score} / entity.projects.length) : 0,
        progress: entity.projects.present? ? (entity.projects.sum{|p| p.progress} / entity.projects.length) : 0
      }
    end

    resp[:overall_progress] = (resp[:entities].sum{|o| o[:progress] } / resp[:entities].length)
    resp[:overall_score] = (resp[:entities].sum{|o| o[:score]} / resp[:entities].length)
    resp[:overall_projects_completed] = resp[:entities].sum{ |p| p[:projects] ? p[:projects][:completed] : 0}
    resp[:overall_projects_wip] = resp[:entities].sum{|p| p[:projects] ? p[:projects][:wip] : 0}
    resp[:section_wise_compliance] = Entity.section_wise_compliance_for_entities(entities).values

    sorted = resp[:entities].sort{|a,b| a[:score] <=> b[:score]}

    resp[:low_entities] = sorted[0..4]
    resp[:high_entities] = sorted.reverse[0..4]
    return_success(resp)
  end


  def db_entity_report
    entity = App::Models::Entity.eager(:projects_for_db)[rp[:entity_id]]
    resp = entity_report_for(entity) 
    sorted = resp[:score_by_section].sort{|(_,a),(_,b)| a <=> b}

    resp[:low_sections] = sorted[0..4].map{|(k,v)| {name: k, score: v}}
    
    resp[:high_sections] = sorted.reverse[0..4].map{|(k,v)| {name: k, score: v}}

    return_success(resp)
  end



  def db_state_report
    entity_ids = DbProject.select_map(:entity_id)
    
    entities = App::Models::Entity.eager(:projects_for_db).where(id: entity_ids).all
    
    resp = {name: 'Jawda', description: 'Qatar Digital Government (QDG) is a cross-governmental, stakeholder-led initiative formed to foster cooperation and champion the cause of digital government in Qatar.',
            description_ar: 'حكومة قطر الرقمية (QDG) هي مبادرة مشتركة بين الحكومات يقودها أصحاب المصلحة تم تشكيلها لتعزيز التعاون ودعم قضية الحكومة الرقمية في قطر.', name_ar: 'جودة'
            }

    total_score = 0; total_progress = 0

    resp[:entities] = entities.map do |entity|
      details = entity_report_for(entity)
      total_progress += details[:total_progress]
      total_score += details[:total_score]
      {
        id: entity.id,
        name: entity.name,
        description: entity.description,
        name_ar: entity.ar_name,
        progress: details[:total_progress].round(2),
        score: details[:total_score],
        
        projects: entity.projects_for_db.reduce({completed: 0, wip: 0, not_started: 0}) do |h, p|
          if p.completed?
            h[:completed] += 1
          elsif p.wip?
            h[:wip] += 1
          elsif p.not_started?
            h[:not_started] += 1
          end
          h
        end
      }
    end

    resp[:overall_progress] = (total_progress / entities.length).round(2)
    resp[:overall_score] = (total_score / resp[:entities].length)
    resp[:overall_projects_completed] = resp[:entities].sum{ |p| p[:projects] ? p[:projects][:completed] : 0}
    resp[:overall_projects_wip] = resp[:entities].sum{|p| p[:projects] ? p[:projects][:wip] : 0}
    resp[:total_projects] = resp[:entities].sum{ |p| p[:projects].length }
    entity_report = entities.map{entity_report_for(_1)}

    resp[:section_wise_status] = sum_arr_with_fields(entity_report, :extras)

    resp[:compliance_by_mandate_level] = { 
      "1" => sum_hash_with_avg2(entity_report, :compliance_by_mandate_level,  "1"),
      "2" =>  sum_hash_with_avg2(entity_report, :compliance_by_mandate_level, "2"),
      "3" =>  sum_hash_with_avg2(entity_report, :compliance_by_mandate_level, "3"),
    }
    
    sorted = resp[:entities].sort{|a,b| a[:score] <=> b[:score]}

    resp[:low_entities] = sorted[0..4]
    resp[:high_entities] = sorted.reverse[0..4]
    # resp[:extras] = sum_hash_with_avg(entities.map{entity_report_for(_1)}, :extras, false )
    return_success(resp)
  end

  def db_project_report
    rec = App::Models::DbProject[rp[:project_id]]
    rec.score_by_section = rec.score_by_section.sort{|(a,v1), (b, v2)| v1 <=> v2}
    return_success(rec.as_json)
  end


  def entity_report_for(entity)
    resp = { name: entity.name, description: entity.description, id: entity.id, name_ar: entity.ar_name }
    projects = entity.projects_for_db
    resp[:projects] = projects.map{_1.as_pos(only: [:name, :description, :progress, :total_score, :total_parameters, :total_completed_parameters, :id])}
    resp[:score_by_section] = sum_hash_with_avg(projects, :score_by_section)
    resp[:qgate1] = sum_hash_with_avg(projects, :qgate1)
    resp[:qgate2] = sum_hash_with_avg(projects, :qgate2)
    resp[:qgate3] = sum_hash_with_avg(projects, :qgate3)
    resp[:qgate4] = sum_hash_with_avg(projects, :qgate4)
    resp[:qgate5] = sum_hash_with_avg(projects, :qgate5)
    resp[:compliance_by_mandate_level] = { 
      "1" => sum_hash_with_avg2(projects, :compliance_by_mandate_level,  "1"),
      "2" =>  sum_hash_with_avg2(projects, :compliance_by_mandate_level, "2"),
      "3" =>  sum_hash_with_avg2(projects, :compliance_by_mandate_level, "3"),
    }
    resp[:extras] = sum_arr_with_fields(projects, :extras)
    resp[:total_progress] = projects.length > 0 ? (projects.sum(&:progress) / projects.length).round(2) : 0
    resp[:total_score] = projects.length > 0 ? (projects.sum(&:total_score) / projects.length).round(2) : 0
    resp 
  end

  def all_projects
    resp = DbProject.all.map{ 
      d = _1.as_json(only: [:id, :name, :description])
      d[:total_score] = _1.calc_total_score
      d[:progress] = _1.progress
      d
    }
    return_success(resp)
  end


  def sum_hash_with_avg(rec, meth, avg=true)

    rec.map do |o|
      o.is_a?(Hash) ? o[meth] : o.send(meth)
    end.flatten.reduce({}) do |h, o|
      o.each {|k,v| (h[k] ||= []) << v}
      h
    rescue => e
      byebug
    end.reduce({}){|h, (k,arr)| h.merge!( k => avg ? (arr.compact.sum / arr.length).round(2) : arr.sum )}
  end

  def sum_hash_with_avg2(rec, meth, k, avg=true)

    rec.map do |o|
      (o.is_a?(Hash) ? o[meth] : o.send(meth))[k]
    end.flatten.reduce({}) do |h, o|
      o&.each {|k,v| (h[k] ||= []) << v}
      h
    end.reduce({}){|h, (k,arr)| h.merge!( k => avg ? (arr.compact.sum / arr.length).round(2) : arr.sum )}
  end


  def sum_arr_with_fields(data, key, flds=nil)
    flds ||= ["Fully Compliant", 'Partially Compliant', 'Non Compliant']

    data.reduce({}) do |h, p|
      arr = p.is_a?(Hash) ? p[key] : p.send(key)
      
      arr.each do |s|
        s = s.with_indifferent_access
        if h[s[:id]]
          flds.each {|f| h[s[:id]][f] += s[f]}
        else
          h[s[:id]] = s
        end
      end
      h
    end.values
  end

  def issues_data
  end

  def challenges
    cond = { entity_id: rp[:entity_id], project_id: rp[:project_id]}.compact
    
    return_success(App::Models::Challenge.eager(:project, :section).where(cond).all.map{_1.as_pos(include: true)})
  end
  
  def self.fields
    {
      save: [ ]
    }
  end
end