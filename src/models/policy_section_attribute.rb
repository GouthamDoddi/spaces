
class App::Models::PolicySectionAttribute < Sequel::Model(App.db[:policy_sections].exclude(parent_id: nil))
  def validate
    super
    validates_presence [:parent_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
