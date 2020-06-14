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
    as.applicable = !params.values.any?{_1 == 'no' }
    save(as)
  end

  def applicable_sections
    as = ApplicableSection.where(project_id: r.params[:project_id], applicable: true)
    as.map(&:section_id)

    return_success(model.where(id: as.map(&:section_id)))
  end

  def project 
    @project ||= App::Models::Compliance::Project.find(id: r.params[:project_id])
  end
end