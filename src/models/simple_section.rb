class App::Models::SimpleSection < Sequel::Model(App.db[:policy_sections])
  many_to_one :policy
  
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
