class App::Models::BillDecree < Sequel::Model
  many_to_one :policy
  def validate
    super
    validates_presence [:name, :policy_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
