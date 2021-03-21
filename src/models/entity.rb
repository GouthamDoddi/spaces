class App::Models::Entity < Sequel::Model
  one_to_many :projects, class: 'App::Models::Compliance::Project', key: :owner_id

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end


  def self.for_report(id)
    eager(:projects => [{record_parameters: :attribute_parameters}, :applied_attributes_obj])[id]
  end

  def projects_status
    projects.reduce({completed: 0, wip: 0, not_started: 0}) do |h, p|
      if p.completed?
        h[:completed] += 1
      elsif p.wip?
        h[:wip] += 1
      elsif p.not_started?
        h[:not_started] += 1
      end
      h
    end
  end
end

