class App::Models::Policy < Sequel::Model
  one_to_many :policy_sections

  plugin ::SequelPlugin::AllowedList
  
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
