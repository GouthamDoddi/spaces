
class App::Models::Policy < Sequel::Model

  one_to_many :risks

  nested_attributes :risks
  def validate
    super
    validates_presence [:title, :owner]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
