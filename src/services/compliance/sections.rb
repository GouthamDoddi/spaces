class App::Services::Compliance::Sections < App::Services::Base

  def model; PolicySection; end

  def questions_for_project
    
  end

  def list
    # ids = project.possible_section_ids
    sections = project.possible_sections.order(Sequel.desc(:created_at))



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
  # attrs = project.applied_attributes.eager(record_parameters: proc{|ds| ds.where(project_id: 15)}).all
  def applicable_sections_enhanced
    
    puts "Filter #{pfilter}"
    attributes = project.applied_attributes.eager(:policy_section).eager(:parameters)
    if(pfilter.length > 0)
      attributes = attributes.eager(record_parameters: proc{|ds| ds.where(project_id: project.id, user_compliance_type: pfilter)})
    else
      attributes = attributes.eager(record_parameters: proc{|ds| ds.where(project_id: project.id)})
    end
    
    res = attributes.all.group_by(&:parent_id).values.collect do |arr|
      if arr.length > 0
        section = arr[0].policy_section.to_pos
        parameters = arr.map(&:parameters).flatten
        section[:attribute_count] = arr.length
        section[:parameter_count] = parameters.length
        # section
        
        if pfilter.length > 0 
          res = arr.any?{|attr| attr.record_parameters.any?{|p| pfilter.include?(p.user_compliance_type.to_i)}} ? section : nil
          if(res) 
            possible_params = arr.map{|attr| attr.record_parameters.select{pfilter.include?(_1.user_compliance_type.to_i)}}.flatten
            res[:attribute_count] = possible_params.map{_1.attribute_id}.uniq.length
            res[:parameter_count] = possible_params.length
            res.merge!(counts(possible_params, possible_params))
            # res[:completed] = possible_params.map{|r| r.closed?}.length
            # res[:in-review] = possible_params.map{|r| r.review?}.length
            # res[:not-tested] = possible_params.map{|r| r.not_tested?}.length 
          end
          res
        else
          possible_params = arr.map(&:record_parameters).flatten
          section.merge!(counts(possible_params, parameters, false))
        end
      else
        nil
      end
    end.compact

    return_success(res)
  end

  def applicable_attributes_enhanced
    attributes = project.applied_attributes.where(parent_id: rp[:section_id]).eager(:parameters)
    if(pfilter.length > 0)
      attributes = attributes.eager(record_parameters: proc{|ds| ds.where(project_id: project.id, user_compliance_type: pfilter)})
    else
      attributes = attributes.eager(record_parameters: proc{|ds| ds.where(project_id: project.id)})
    end
    res = attributes.all.collect do |attr|
      # puts attr
      resp = 
        if pfilter.length > 0 
          r = attr.record_parameters.any?{|p| pfilter.include?(p.user_compliance_type.to_i)} ? attr : nil
          if(r)
            possible_params = r.record_parameters.select{pfilter.include?(_1.user_compliance_type.to_i)}
            puts "Possible params: #{possible_params.length}"
            r = r.to_pos.merge(parameter_count: possible_params.length).merge(counts(possible_params, possible_params))
          end
          r
        else
          attr.to_pos.merge(parameter_count: attr.parameters.length).merge!(counts(attr.record_parameters, attr.parameters, false))
        end
    end
    return_success(res.compact)
  end

  def counts(rec_params, parameters, ignore=true)
    res = {}
    pids = parameters.map(&:id)
    
    # selected_recs = rec_params.select{|r| pids.include?(r.parameter_id)}
    res[:parameter_count] = [pids.length, rec_params.length].max 
    res[:completed_count] = rec_params.uniq.sum{|r| r.closed? ? 1 : 0}
    res[:in_review_count] = rec_params.uniq.sum{|r| r.review? ? 1 : 0}
    res[:not_tested_count] = rec_params.uniq.sum{|r| r.not_tested? ? 1 : 0} + (res[:parameter_count] - res[:in_review_count] - res[:completed_count])
    res
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

  def pfilter; @pfilter ||= (rp[:filter] || '').split(',').map(&:to_i); end
end