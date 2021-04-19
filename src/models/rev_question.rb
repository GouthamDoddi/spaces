
class App::Models::RevQuestion < Sequel::Model
  def validate
    super
    validates_presence [:question, :options]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
