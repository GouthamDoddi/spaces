
class App::Models::PolicySectionAttribute < Sequel::Model(App.db[:policy_sections].exclude(parent_id: nil))

  many_to_one :policy_section, key: :parent_id
  
  def validate
    super
    validates_presence [:parent_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end

  def object_ids_val
    (object_ids&.to_a || [])
  end

  def subobject_ids_val
    (subobject_ids&.to_a || [])
  end

  def question_ids_val
    (question_ids&.to_a || [])
  end

  def possible_question_ids
    policy_section.policy.question_ids_val - policy_section.question_ids_val - question_ids_val
  end

  def possible_subobject_ids
    policy_section.policy.subobject_ids_val - policy_section.subobject_ids_val - subobject_ids_val
  end

  def possible_object_ids
    policy_section.policy.object_ids_val - policy_section.object_ids_val - object_ids_val
  end
end
