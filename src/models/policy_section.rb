class App::Models::PolicySection < Sequel::Model(App.db[:policy_sections].where(parent_id: nil))
  many_to_one :policy

  def object_ids
    (super&.to_a || [])
  end

  def subobject_ids
    (super&.to_a || [])
  end

  def question_ids
    (super&.to_a || [])
  end
  
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
