class App::Services::Reports < App::Services::Base

  

  def entities
    data = Entity.map do |e|
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
    # App::
  end

  
  def self.fields
    {
      save: [ ]
    }
  end
end