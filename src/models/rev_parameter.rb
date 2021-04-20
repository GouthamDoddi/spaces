
class App::Models::RevParameter < Sequel::Model
  def validate
    super
    validates_presence [:parameter_name, :mandate, :attribute_id, :attribute_name]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
