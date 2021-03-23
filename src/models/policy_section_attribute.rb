
class App::Models::PolicySectionAttribute < Sequel::Model(App.db[:policy_sections].exclude(parent_id: nil))

  many_to_one :policy_section, key: :parent_id
  one_to_many :parameters, class: 'App::Models::AttributeParameter', key: :attribute_id

  one_to_many :record_parameters, class: 'App::Models::Compliance::RecordParameter', key: :attribute_id

  def after_save
    super
    expire_cache
  end
  
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


  def self.cache
    @cache ||= eager(:parameters).all.reduce({}) {|h, o|
      h[o.id] = o
      h
    }
  end

  def self.expire_cache
    @cache = nil
  end
end
