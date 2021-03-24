class App::Services::Reports < App::Services::Base

  

  def entities
    data = Entity.where(id: [1,2,3,4,5,6,7,8,9,10,11,12,13,14]).map do |e|
      { name: e.name,
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
    data = Compliance::Project.where(owner_id: rp[:entity_id]).map do |e|
      { 
        name: e.name,
        id: e.id, 
      }
    end
    return_success(data)
  end
  
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

    resp = { name: entity.name, description: entity.description }

    resp[:projects] = entity.projects.map do |p|
      {
        id: p.id,
        name: p.name, description: p.description,
        progress: p.progress, score: p.score
      }
    end
    resp
  end


  def state_report
    resp = { name: 'Jawda', description: 'Qatar Digital Government (QDG) is a cross-governmental, stakeholder-led initiative formed to foster cooperation and champion the cause of digital government in Qatar.'}
    entities = Entity.for_report
    
    
    resp[:entities] = entities.map do |entity|
      { id: entity.id, name: entity.name, description: entity.description, 
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

    resp[:low_entities] = sorted[0..5]
    resp[:high_entities] = sorted.reverse[0..5]
    return_success(resp)
  end
  
  def self.fields
    {
      save: [ ]
    }
  end
end