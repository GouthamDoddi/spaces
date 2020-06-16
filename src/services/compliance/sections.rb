class App::Services::Compliance::Sections < App::Services::Base

  def model; PolicySection; end

  def list
    cond = Sequel.pg_array_op(:subobject_ids).overlaps(project.subobject_ids)
    sections = PolicySection.where(cond).all

    ids = sections.map(&:id)
    as = ApplicableSection.where(project_id: r.params[:project_id], section_id: ids).reduce({}){|a, o| a.merge!(o.section_id => o)}
    
    return_success(sections.map{|s| s.to_pos.merge!(applicable: as[s.id])})
    # return_success(PolicySection.where(cond).map(&:to_pos))
  end

  def questions
    ids = item.subobject_ids & project.subobject_ids

    return_success(ObjectQuestion.where(subobject_id: ids, id: (item.question_ids || []).map(&:to_i)).map(&:to_pos))
  end

  def applicable_questions
    as = ApplicableSection.find_or_create(section_id: r.params[:id], project_id: r.params[:project_id], user_id: App.cu.id)
    as.answers = params
    as.applicable = !params.values.any?{|a| a == 'no' }
    save(as)
  end

  def applicable_sections
    as = ApplicableSection.eager(:policy_section).where(project_id: r.params[:project_id], applicable: true)

    # return_success(as.map{|a| a.as_json.merge!(a.policy_section.as_json(except: :id))})

    return_success(as.map{|as| as.policy_section.to_pos})
  end

  def started_sections
    ids = App::Models::Compliance::RecordParameter.select_map(:applicable_section_id).uniq

    data = App::Models::ApplicableSection.eager(:project).where(section_id: ids).all

    res = data.map do |section|
      { id: section.project.id, title: section.project.name, description: section.project.description, beneficiary: 'Sathish', status: 'Open'}
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