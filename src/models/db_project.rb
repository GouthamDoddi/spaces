class App::Models::DbProject < Sequel::Model

  def cm
    {
      1 => 'Website',
      2 => 'Mobile App',
      3 => 'E-Service'
  }
  end
  def load!
    entity =  App::Models::Entity.for_report(entity_id.to_i)
    projects = entity.projects.select{current_project_ids.to_a.include?(_1.id)}

    self.score_by_section = get_sections_score(projects)
    self.total_score = (self.score_by_section.values.sum / self.score_by_section.values.length).round(2)
    self.total_parameters = projects.sum{_1.count_of_total_parameters}
    self.total_completed_parameters = projects.sum{_1.completed_count}
    self.qgate1 = load_gate(projects, 1)
    self.qgate2 = load_gate(projects, 2)
    self.qgate3 = load_gate(projects, 3)
    self.qgate4 = load_gate(projects, 4)
    self.qgate5 = load_gate(projects, 5)
    self.extras = section_wise_completion(projects)

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

end


# App::Models::DbProject.new(entity_id: 4, current_project_ids: [9, 44, 45])
# App::Models::DbProject.new(entity_id: 7, current_project_ids: [10,23])