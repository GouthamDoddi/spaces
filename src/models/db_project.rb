class App::Models::DbProject < Sequel::Model
  many_to_one :entity
  def cm
    {
      1 => 'Website',
      2 => 'Mobile App',
      3 => 'E-Service'
  }
  end

  def calc_total_score
    self.score_by_section.values.length > 0 ? (self.score_by_section.values.sum / self.score_by_section.values.length).round(2) : 0
  end
  
  def load!
    entity =  App::Models::Entity.for_report(entity_id.to_i)
    projects = entity.projects.select{current_project_ids.to_a.include?(_1.id)}

    self.score_by_section = get_sections_score(projects)
    self.total_score = self.score_by_section.values.length > 0 ? (self.score_by_section.values.sum / self.score_by_section.values.length).round(2) : 0
    self.total_parameters = projects.sum{_1.count_of_total_parameters}
    self.total_completed_parameters = projects.sum{_1.completed_count}
    self.qgate1 = load_gate(projects, 1)
    self.qgate2 = load_gate(projects, 2)
    self.qgate3 = load_gate(projects, 3)
    self.qgate4 = load_gate(projects, 4)
    self.qgate5 = load_gate(projects, 5)
    self.extras = section_wise_completion(projects)
    self.compliance_by_mandate_level = calculate_compl_by_mandate_level(projects)
    self.project_status = get_project_status(projects)

  end

  def get_project_status(projects)
    wt = projects.compact.sum do
      if _1.completed?
        2
      elsif _1.wip?
        1
      else
        0 
      end
    end


    if(wt == 0)
      'not_started'
    elsif wt < (projects.length * 2)
      'wip'
    else
      'completed'
    end
  rescue => e
    byebug
    ""
  end

  def progress
    total_parameters > 0 ? (total_completed_parameters / total_parameters.to_f).round(2) : 0
  end

  def calculate_compl_by_mandate_level(projects)
    sws = projects.map(&:record_parameters).flatten.group_by(&:mandate_level)
    sws.delete(nil)
    sws.keys.reduce({}) do |h, key|
      h[key] ||= {}
      hash = sws[key].group_by(&:user_compliance_type)
      hash.delete(nil)

      h[key]['Fully Compliant'] = ((d = hash.delete(1)) && d ) ? (d.length / sws[key].length.to_f).round(2) * 100 : nil
      h[key]['Partially Compliant'] = ((d = hash.delete(2)) && d  ) ? (d.length / sws[key].length.to_f).round(2) * 100 : nil
      h[key]['Non Compliant'] = begin
       non = hash.values.flatten.compact
       non.length > 0 ? (non.length / sws[key].length.to_f).round(2) * 100: nil
      end
      h
    end
  end

  def section_wise_completion(projects)
    sws = projects.map(&:section_wise_compliance_count).flatten.group_by{_1[:id]}
    sws.keys.reduce({}) do |h, key|
      arr = sws[key]
      full = arr.sum{_1["Fully Compliant"]}
      part = arr.sum{_1["Partially Compliant"]}
      non = arr.sum{_1["Non Compliant"]}
      h[key] = arr[0].slice(:name, :id).merge!("Fully Compliant" => full, 
        "Partially Compliant" => part, 'Non Compliant' => non)
      h
    end.values
    
  end

  def get_sections_score(projects)
    sws = projects.map(&:section_wise_score).flatten.group_by{_1[:name]}
    sws.keys.reduce({}) do |h, key|
      arr = sws[key]
      h[key] = (arr.sum{_1[:score]} / arr.length.to_f).round(2)
      h
    end
  end

  def load_gate(projects, id)
    category_progress = {}
    return {} if projects.length == 0
    total = projects.sum do |p|
      qs = p.total_parameters.select do |param|
        param.quality_gates.include?(id)
      end.map(&:id)

      
      completed = p.record_parameters.map{ _1.parameter_id if (_1.closed? || _1.review?) && qs.include?(_1.parameter_id) }.compact
      # puts completed.inspect
      # puts qs.inspect
      # puts "***********"
      variation = completed.length - completed.uniq.length
      # puts "QS: #{qs.length}, #{variation} #{cm[p.category_id]}, #{completed.length }"
      category_progress[cm[p.category_id]] = (completed.length / (qs.length.to_f + variation) ).round(2)      
    end / projects.length

    category_progress.merge!(total: total)
  end

  def completed?; project_status == 'completed' ; end

  def wip?; project_status == 'wip'; end
  def not_started?; project_status == 'not_started'; end

  def as_pos(hash)
    data = as_json(only: hash[:only])
    data[:progress] = progress
    data
  end

end


# App::Models::DbProject.new(entity_id: 4, current_project_ids: [9, 44, 45])
# App::Models::DbProject.new(entity_id: 7, current_project_ids: [10,23])