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
  


  
  def self.fields
    {
      save: [ ]
    }
  end
end