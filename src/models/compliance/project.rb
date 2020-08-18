class App::Models::Compliance::Project < Sequel::Model

  # one_to_many :applicable_sections, class: 'App::Models::ApplicableSection'

  plugin ::SequelPlugin::AllowedList

  # def after_save
  #   applicable_sections_dataset.exclude(section_id: possible_section_ids).delete
  # end

  # def applicable_sections
  #   @applicable_sections ||= App::Models::PolicySectionAttribute.where(id: applied_attributes.to_a || []).select_map(:parent_id).uniq
  # end

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    validates_presence [:name]
    validates_unique :name
  end

  def applied_attribute_ids_val
    applied_attribute_ids&.to_a || []
  end

  # def applicable_sections
  #   App::Models::ApplicationSection.where(project_id: id, applicable: true)
  # end

  def applied_attributes
    App::Models::PolicySectionAttribute.where(id: applied_attribute_ids_val)
  end

  def applied_section_ids
    applied_attributes.map(&:parent_id)
  end

  def applied_sections
    App::Models::PolicySection.where(id: applied_section_ids)
  end

  def possible_attributes
    if subobject_ids
     cond = Sequel.pg_array_op(:subobject_ids).overlaps(subobject_ids)
      App::Models::PolicySectionAttribute.exclude(cond).or(subobject_ids: nil)
    else
      []
    end
  end

  
  def possible_questions
    # Policy objectids  should not have projoids
  end

  def possible_sections
    if (pa = possible_attributes).present? 
      cond = Sequel.pg_array_op(:object_ids).overlaps(object_ids)
      sub_cond = Sequel.pg_array_op(:subobject_ids).overlaps(subobject_ids)
      contains = Sequel.pg_array_op(:subobject_ids).contains(subobject_ids)
      policy_ids = App::Models::Policy.where(cond).where(sub_cond).select_map(:id)
      App::Models::PolicySection.where(id: pa.distinct.select_map(:parent_id), policy_id: policy_ids).exclude(contains)
    else
      []
    end
  end

  def possible_section_ids
    (pa = possible_attributes).present? ? pa.distinct.select_map(:parent_id).compact : []
  end

  def object_ids_val
    (object_ids&.to_a || [])
  end

  def subobject_ids_val
    (subobject_ids&.to_a || [])
  end

  def to_pos
    as_json
  end

  def applicable_policies
    @applicable_policies ||= begin
      ocond = :object_ids.pg_array.overlaps(object_ids)
      scond = :subobject_ids.pg_array.overlaps(subobject_ids)
      App::Models::Policy.where(ocond).where(scond).all
    end
  end

  def applicable_sections
    oids = object_ids
    soids = subobject_ids
    @applicable_sections ||= 
      App::Models::PolicySection.where(policy_id: applicable_policies.map(&:id))
        .where{ Sequel.|(Sequel.~(:subobject_ids.pg_array.contains(soids)), subobject_ids: nil)}
        .where{ Sequel.|(Sequel.~(:object_ids.pg_array.contains(oids)), object_ids: nil)}.all
  end

  def applicable_attributes
    oids = object_ids
    soids = subobject_ids
    App::Models::PolicySectionAttribute.where(parent_id: applicable_sections.map(&:id))
      .where{ Sequel.|(Sequel.~(:subobject_ids.pg_array.contains(soids)), subobject_ids: nil)}
      .where{ Sequel.|(Sequel.~(:object_ids.pg_array.contains(oids)), object_ids: nil)}
  end

  def possible_questions
    @possible_questions ||= 
    App::Models::ObjectQuestion.where(id: applicable_policies.map(&:question_ids).flatten.uniq).all
  end

  # def possible_questions_section_level
  #   @possible_questions_section_level ||= (applicable_policies.map(&:question_ids).flatten - 
  #     applicable_sections.map(&:question_ids).flatten
  #   ).uniq.compact
  # end

  def possible_questions_for(attr)
    section = applicable_sections.detect{|p| p.id == attr.parent_id}
    policy = applicable_policies.detect{|p| p.id == section.policy_id}
    _subobject_ids = (policy.subobject_ids_val - section.subobject_ids_val - attr.subobject_ids_val)
    possible_questions.filter_map{ _1.id if(_subobject_ids.include?(_1.subobject_id))} - attr.question_ids_val
  end

  # def applicable_questions
  #   # PolicySectionAttribute.where(parent_ids: )
  #   (applicable_policies.map(&:question_ids).flatten - 
  #     applicable_sections.map(&:question_ids).flatten - 
  #     applicable_attributes.map(&:question_ids).flatten).uniq
  # end

end


# proj - sec, common, xxx
# sec - sec, common
# project -- 


