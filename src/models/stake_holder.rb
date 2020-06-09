
class App::Models::StakeHolder < Sequel::Model
  def validate
    super
    validates_presence [:name]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
