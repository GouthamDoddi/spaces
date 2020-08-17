class App::Services::Compliance::Sections < App::Services::Base

  def model; PolicySection; end


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
    project = App::Models::Compliance::Project[rp[:project_id]]
    section_ids = PolicySectionAttribute.where(id: project.applied_attributes.to_a || []).select_map(:parent_id).uniq
    return_success(model.where(id: section_ids).map{|s| s.to_pos})
  end

  def started_sections
    ids = App::Models::Compliance::RecordParameter.select_map(:applicable_section_id).uniq

    data = project.applicable_sections
    # byebug
    res = data.map do |section|
      
      { id: section.project.id, title: section.project.name, description: section.project.description, beneficiary: 'Sathish', status: 'Open', user_id: section.user_id}
    end
    return_success(res)
  end

  def attributes
    return_success(PolicySectionAttribute.where(parent_id: r.params[:section_id]).map(&:to_pos))
  end

  def project 
    @project ||= App::Models::Compliance::Project.find(id: r.params[:project_id])
  end
end