class App::Services::Compliance::Sections < App::Services::Base

  def model; PolicySection; end


  def list
    ids = project.possible_section_ids
    sections = model.where(id: ids).all
    as = ApplicableSection.where(project_id: r.params[:project_id], section_id: ids).reduce({}){|a, o| a.merge!(o.section_id => o)}
    
    return_success(sections.map{|s| s.to_pos.merge!(applicable: as[s.id])})
    # return_success(PolicySection.where(cond).map(&:to_pos))
  end

  def questions
    ids =  App::Models::Subobject.exclude(object_id: item.object_ids).exclude(id: item.subobject_ids).select(:id)
    
    return_success(ObjectQuestion.where(subobject_id: ids).exclude(id: item.question_ids).map(&:to_pos))
  end

  def applicable_questions
    project = App::Models::Compliance::Project[r.params[:project_id]]
    

    attributes = PolicySectionAttribute.eager(policy_section: :policy).where(parent_id: rp[:id]).all
    
    qs = params.select{|q, ans| ans == 'yes' || ans == 'Yes' }
    project.applied_attributes ||= []
    project.applied_attributes += attributes.filter_map {|attr| attr.id if (attr.question_ids_val - qs.keys).blank?}
    project.applied_attributes.uniq!
    save(project)
  end

  def applicable_sections
    project = App::Models::Compliance::Project[rp[:project_id]]
    as = PolicySectionAttribute.eager(:policy_section).where(id: project.applied_attributes || [])
    return_success(as.map{|as| as.policy_section.to_pos})
  end

  def started_sections
    ids = App::Models::Compliance::RecordParameter.select_map(:applicable_section_id).uniq

    data = App::Models::ApplicableSection.eager(:project).where(section_id: ids).all
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