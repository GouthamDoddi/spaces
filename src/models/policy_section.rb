class App::Models::PolicySection < Sequel::Model(App.db[:policy_sections].where(parent_id: nil))
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
