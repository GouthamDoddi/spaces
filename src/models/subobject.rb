
class App::Models::Subobject < Sequel::Model
  one_to_many :questions, class: 'App::Models::ObjectQuestion'
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
