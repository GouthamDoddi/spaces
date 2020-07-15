class App::Models::Compliance::Project < Sequel::Model

  one_to_many :applicable_sections, class: 'App::Models::ApplicableSection'

  plugin ::SequelPlugin::AllowedList

  def after_save
    applicable_sections_dataset.exclude(section_id: possible_section_ids).delete
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
    cond = Sequel.pg_array_op(:subobject_ids).overlaps(subobject_ids)
    App::Models::PolicySectionAttribute.exclude(cond).or(subobject_ids: nil)
  end

  def possible_questions
    
  end

  def possible_section_ids
    possible_attributes.distinct.select_map(:parent_id).compact
  end



  def to_pos
    as_json
  end
end