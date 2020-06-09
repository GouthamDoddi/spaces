
class App::Models::PolicyObject < Sequel::Model
  def validate
    super
    validates_presence [:name, :policy_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
