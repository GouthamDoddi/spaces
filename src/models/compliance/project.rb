class App::Models::Compliance::Project < Sequel::Model

  # one_to_many :applicable_sections, class: 'App::Models::ApplicableSection'

  plugin ::SequelPlugin::AllowedList

  # def after_save
  #   applicable_sections_dataset.exclude(section_id: possible_section_ids).delete
  # end

  def applicable_sections
    @applicable_sections ||= App::Models::PolicySectionAttribute.where(id: applied_attributes.to_a || []).select_map(:parent_id).uniq
  end

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    validates_presence [:name]
    validates_unique :name
  end

  # def applicable_sections
  #   App::Models::ApplicationSection.where(project_id: id, applicable: true)
  # end

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
end