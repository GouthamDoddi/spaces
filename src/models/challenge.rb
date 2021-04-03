
class App::Models::Challenge < Sequel::Model
  # one_to_many :questions, class: 'App::Models::ObjectQuestion'
  many_to_one :section, class: 'App::Models::PolicySection', key: :section_id
  many_to_one :project, class: 'App::Models::Compliance::Project', key: :project_id

  TYPES = {
    1 => {name: 'Content Validation'},
    2 => { name: 'Unable to Access'},
    3 => { name: 'Support Activity'},
    4 => { name: 'Missing Test data'},
    5 => { name: 'Requires Self testing and Evidence'},
  }
  
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end



  def as_pos(options={})
    data = as_json
    data[:type] = TYPES[type_id]
    if(options[:include])
      data[:project] = project.as_json
      data[:section] = section.as_json
    end
    data
  end

end
