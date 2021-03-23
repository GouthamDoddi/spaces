class App::Models::PolicySection < Sequel::Model(App.db[:policy_sections].where(parent_id: nil))
  many_to_one :policy

  def after_save
    super
    expire_cache
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
  
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end

  def self.cache
    @cache ||= all.reduce({}) {|h, o|
      h[o.id] = o
      h
    }
  end

  def self.expire_cache
    @cache = nil
  end
end
