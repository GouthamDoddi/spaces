
class App::Models::PolicySubobject < Sequel::Model
  def validate
    super
    validates_presence [:name, :policy_id, :policy_object_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
