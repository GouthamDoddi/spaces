class App::Services::Compliance::Sections < App::Services::Base

  def model; PolicySection; end

  def questions_for_project
    
  end

  def list
    # ids = project.possible_section_ids
    sections = project.possible_sections



    # as = ApplicableSection.where(project_id: r.params[:project_id], section_id: sections.map(&:id)).reduce({}){|a, o| a.merge!(o.section_id => o)}
    as = project.applicable_sections
    # byebug
    return_success(sections.map{|s| s.to_pos.merge!(applicable: as.include?(s.id))})
    # return_success(PolicySection.where(cond).map(&:to_pos))
  end

  def questions
    ids =  App::Models::Subobject.exclude(object_id: item.object_ids_val).exclude(id: item.subobject_ids_val)
            .where(object_id: project.object_ids_val, id: project.subobject_ids_val).select_map(:id)
    return_success(ObjectQuestion.where(subobject_id: ids).exclude(id: item.question_ids_val).map(&:to_pos))
  end

  def applicable_questions
    project = App::Models::Compliance::Project[r.params[:project_id]]

    attributes = PolicySectionAttribute.eager(policy_section: :policy).where(parent_id: rp[:id], ).all
    qs = params.select{|q, ans| ans == 'yes' || ans == 'Yes' }
    project.applied_attributes ||= []
    selected_attrs = attributes.filter_map do |attr|
      qids = params.keys.map(&:to_i) & attr.possible_question_ids
      if (qids - qs.keys.map(&:to_i)).blank?
        attr.id
      end
    end

    project.applied_attributes -= attributes.map(&:id)
    project.applied_attributes += selected_attrs
    project.applied_attributes.uniq!
    save(project)
  end

  def applicable_sections
    return_success(project.applied_sections.map{|s| s.to_pos})
  end

  def applicable_sections_enhanced
    filter = rp[:filter]
    puts "Filter #{filter}"
    attributes = project.applied_attributes
      .eager(:policy_section).eager(:parameters)
      .all.group_by(&:parent_id)

    res = attributes.values.collect do |arr|
      if arr.length > 0
        section = arr[0].policy_section.to_pos
        section[:attribute_count] = arr.length
        section[:parameter_count] = arr.sum{|a| a.parameters.length }
        section
      else
        nil
      end
    end.compact
    return_success(res)
  end

  def applicable_attributes_enhanced
    attributes = project.applied_attributes.where(parent_id: rp[:section_id]).eager(:parameters).all
    res = attributes.collect do |attr|
      attr.to_pos.merge(parameter_count: attr.parameters.length)
    end
    return_success(res)
  end

  def started_sections
    recs = App::Models::Compliance::RecordParameter.distinct(:project_id).eager(:project).where(status: 'open')
    # recs = recs.where(created_by)

    res = recs.map do |rec|
      
      { id: rec.project.id, title: rec.project.name, description: rec.project.description, beneficiary: 'Sathish', status: rec.status, user_id: rec.user_id}
    end
    return_success(res)
  end

  def started_applicable_sections
    section_ids = App::Models::Compliance::RecordParameter.where(project_id: rp[:project_id]).exclude(status: nil).select_map(:section_id)
    return_success(PolicySection.where(id: section_ids).map(&:to_pos))
  end

  def started_applicable_attributes
    attr_ids = App::Models::Compliance::RecordParameter.where(project_id: rp[:project_id], section_id: rp[:section_id]).exclude(status: nil).select_map(:attribute_id)
    return_success(PolicySectionAttribute.where(id: attr_ids).map(&:to_pos))
  end

  def attributes
    # id: project&.applied_attribute_ids
    return_success(PolicySectionAttribute.where(parent_id: r.params[:section_id]).map(&:to_pos))
  end

  def project 
    @project ||= App::Models::Compliance::Project.find(id: r.params[:project_id])
  end
end