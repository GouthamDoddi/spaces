
class App::Models::BeneficiarySegment < Sequel::Model
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
