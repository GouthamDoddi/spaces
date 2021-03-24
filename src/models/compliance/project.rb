class App::Models::Compliance::Project < Sequel::Model

  # one_to_many :applicable_sections, class: 'App::Models::ApplicableSection'
  one_to_many :record_parameters, class: 'App::Models::Compliance::RecordParameter'
  # many_to_many :applied_section_objs, 
  one_to_many :applied_attributes_obj, eager: :parameters, class: 'App::Models::PolicySectionAttribute', 
      dataset: (proc do
        App::Models::PolicySectionAttribute.where(id: applied_attribute_ids_val)
    end)


  plugin ::SequelPlugin::AllowedList

  # def after_save
  #   applicable_sections_dataset.exclude(section_id: possible_section_ids).delete
  # end

  # def applicable_sections
  #   @applicable_sections ||= App::Models::PolicySectionAttribute.where(id: applied_attributes.to_a || []).select_map(:parent_id).uniq
  # end

  # one_to_many :applied_attributes_obj, class: 'App::Models::PolicySectionAttribute', 
  #   dataset: (proc do
  #       App::Models::PolicySectionAttribute.where(id: applied_attribute_ids_val)
  #   end)
  # one_to_many :applied_attributes_obj, class: 'App::Models::PolicySectionAttribute',  key_column: :id, primary_key_method: :applied_attribute_ids_val, key_method: :applied_attribute_ids_val
  # many_to_many :applied_attributes_obj, class: 'App::Models::PolicySectionAttribute',  key_column: :id, primary_key_method: :applied_attribute_ids_val, key_method: :applied_attribute_ids_val
  #primary_key: :applied_attribute_ids_val, key: :id
  # dataset: (proc do
  #     App::Models::PolicySectionAttribute.where(id: applied_attribute_ids_val)
  # end)
  # , eager_loader: (lambda do |eo|
  #   id_map = {}
  #   eo[:rows].each do |n| 
  #     # Initialize an empty array of child associations for each parent node
  #     n.associations[:children] = []
  #     # Populate identity map of nodes
  #     id_map[n.pk] = n 
  #   end
  # end)

    #primary_key: :applied_attribute_ids_val, key: :id

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
      App::Models::Policy.where(ocond).where(scond).exclude(id: [1, 2, 3]).all
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


  def applicable_parameters
    @applicable_parameters ||= applied_attributes.eager(:parameters).all.reduce([]){|s, o| s += o.parameters }    
  end

  def variations_count
    pids = project.record_parameters.map(&:parameter_id)
    pids.length - pids.uniq.length
  end


  def completed?
    (total_parameters.map(&:id) - record_parameters.map(&:parameter_id)).length == 0 &&
    record_parameters.select{_1.not_tested?}.length == 0
    # record_parameters.select{ !_1.closed? && !_.1.review?}.length == 0
  end

  def wip?
    !completed? && record_parameters.length > 0
  end

  def not_started?
    record_parameters.length == 0
  end


  def attributes_with_parameters
    # @attributes_with_parameters ||= applied_attributes.eager(:parameters).all
    App::Models::PolicySectionAttribute.cache.slice(*applied_attribute_ids_val).values
    # @attributes_with_parameters ||= applied_attributes_obj
  end

  def policy_sections
    # @policy_sections ||= App::Models::PolicySection.where(id: attributes_with_parameters.map(&:parent_id)).all
    App::Models::PolicySection.cache.slice(*attributes_with_parameters.map(&:parent_id)).values
  end
  

  def total_parameters
    @total_parameters ||= attributes_with_parameters.reduce([]){|arr, attr| arr += attr.parameters }
  end

  def count_of_total_parameters
    rpids = record_parameters.map(&:parameter_id).compact
    [total_parameter_ids - rpids].length + (rpids.length)
  end

  def progress_counts
    @progress_counts ||= record_parameters.reduce({completed: 0, not_started: 0}) do |h, rp|
      h[:completed] += 1 if rp.closed? || rp.review?
      h[:not_started] += 1 if rp.not_tested?
      h
    end
  end

  def completed_count; progress_counts[:completed]; end


  def total_parameter_ids
    @total_parameter_ids ||= total_parameters.map(&:id)
  end

  def section_wise_score(include_count=false)

    rp_sections = record_parameters.group_by(&:section_id)
        
    section_wise = attributes_with_parameters.group_by(&:parent_id)

    policy_sections.map do |section|
      # section = section.first
      res = { name: section.name, score: 0 }
      if rp_sections[section.id]
        rpids = (rp_sections[section.id] || []).map(&:parameter_id)
        variations_count = rpids.length - rpids.uniq.length
        total_parameter_ids = section_wise[section.id].reduce([]){|t, a| t += a.parameters.map(&:id) }
        total_parameter_count = [total_parameter_ids - rpids].length + rpids.compact.length
        sum_of_all_mandate_levels = rp_sections[section.id].sum{|rp| rp.mandate_level_wt}

        res = { name: section.name, score: (rp_sections[section.id].sum{|rp| (rp.mandate_level_wt / sum_of_all_mandate_levels.to_f) * rp.compliance_score} )}
      end
      if include_count
        res.merge!(compliance_count_for_section(section, rp_sections[section.id]))
      end
      res
    end
    
  end

  def score
    ss = section_wise_score
    ss.present?  ? ss.sum{|o| o[:score]} / ss.length : 0
  end

  def progress
    (completed_count / count_of_total_parameters.to_f) * 100
  end

  def compliance_count_for_section(section, rps)
    default = {'Fully Compliant' => 0, 'Partially Compliant' => 0, 'Non Compliant' => 0}
    if(rps)
      rps.reduce(default) do |h, rp|
        if rp.user_compliance_type == 1
          h['Fully Compliant'] += 1
        elsif rp.user_compliance_type == 1
          h['Partially Compliant'] += 1
        elsif rp.user_compliance_type.nil? || rp.user_compliance_type < 8
          h['Non Compliant'] += 1
        end
        h
      end
    else
      default
    end
  end

  def section_wise_compliance_count(rp_sections=nil)
    rp_sections ||= record_parameters.group_by(&:section_id)
    policy_sections.map do |section|
      {id: section.id, name: section.name}.merge!(compliance_count_for_section(section, rp_sections[section.id]))
    end
  end

end


# proj - sec, common, xxx
# sec - sec, common
# project -- 


