
class App::Models::Compliance::ProjectTask < Sequel::Model
  many_to_one :case
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
