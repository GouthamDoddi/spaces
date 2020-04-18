
class App::Models::Risk < Sequel::Model

  many_to_one :policy

  def validate
    super

    validates_presence [:statement]
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
