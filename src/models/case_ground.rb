
class App::Models::CaseGround < Sequel::Model

  one_to_many :cases, class: 'App::Models::RevCase', key: :ground_id
  
  def validate
    super
    validates_presence [:name]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
