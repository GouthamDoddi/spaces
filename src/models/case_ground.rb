
class App::Models::CaseGround < Sequel::Model
  
  def validate
    super
    validates_presence [:name]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
