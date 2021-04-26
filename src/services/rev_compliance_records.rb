class App::Services::RevComplianceRecords < App::Services::Base


   STATUS = ['submitted', 'open', 'in-review', 'approved', 'rejected']
  def model; App::Models::RevComplianceRecord; end

  def list
    # page = rp[:page] || 1
    # size = rp[:size] || 10
    # offset = (page - 1) * size
    # cond = {compliance_project_id: project.compliance_projects_dataset.select_map(:id) exception: false}
    # data = model.where(cond).limit(size).offset(offset)
    # return_success(data)
  end

  def create
    return_errors!("Not Allowed")
  end

  def status_of_project(cp)
    status = cp.compliance_records.map(&:status).uniq.compact

    
    if status.include?(1) || status.blank?
      'draft'
    elsif status.include?(2)
      'in-review'
    elsif status.include?(4)
      'completed'
    end
  end


  def approve_reject_cond
    valid_flags = %w[attribute_id section_id parameter_id compliance_record_id]
    key = params.keys & valid_flags

    if(key && key.length == 1 )
      key = key.first  
      key == 'compliance_record_id' ? {id: params[key]} : {key.to_sym => params[key]} 
    else
      return_errors!("Invlid flag, it should be on e of #{valid_flags}")
    end
  end

  def approve
    byebug
    o = model.where(approve_reject_cond).where(status: 2, compliance_project_id: rp[:compliance_project_id]).update(status: 4)
    
    return_success("#{o} records approved")
  end


  def reject
    o = model.where(approve_reject_cond).where(status: 2, compliance_project_id: rp[:compliance_project_id]).update(status: 3)
    return_success("#{o} records rejected")
  end

  def report
    data = project.compliance_projects_dataset.eager(:compliance_records_valid).all

    resp = data.map do |cp|
      o = cp.as_json(only: [:project_name, :project_name_ar, :id])
      o[:section_count] = cp.compliance_records.map(&:section_id).uniq.length
      o[:attribute_count] = cp.compliance_records.map(&:attribute_id).uniq.length
      o[:parameter_count] = cp.compliance_records.map(&:parameter_id).uniq.length
      o[:status] = status_of_project(cp)
      o
    end

    return_success(resp)
  end

  def section_report
    compl_project_id = rp[:compl_project_id]
    cr = model.where(compliance_project_id: compl_project_id).exclude(exception: true).all

    resp = {}

    cr.each do |o|
      resp[o.section_id] ||= {attributes: [], 
        parameters: [], completed: 0, not_tested: 0, section_name: o.section_name,
        section_id: o.section_id
      }
      resp[o.section_id][:attributes] << o.attribute_id
      resp[o.section_id][:parameters] << o.parameter_id
      if(o.status == 'completed')
        resp[o.section_id][:completed] += 1
      else
        resp[o.section_id][:not_tested] += 1
      end
    end
    
    data = resp.values.map {|o| 
      o[:attribute_count] = o.delete(:attributes).uniq.length
      o[:parameter_count] = o.delete(:parameters).uniq.length
      o
    }

    return_success(data)
  end

  def attribute_report
    compl_project_id = rp[:compl_project_id]
    cr = model.where(compliance_project_id: compl_project_id, section_id: rp[:section_id]).exclude(exception: true).all
    resp = {}

    cr.each do |o|
      resp[o.attribute_id] ||= {
        parameters: [], completed: 0, not_tested: 0, attribute_name: o.attribute_name,
        attribute_id: o.attribute_id
      }
      resp[o.attribute_id][:parameters] << o.parameter_id
      if(o.status == 'completed')
        resp[o.attribute_id][:completed] += 1
      else
        resp[o.attribute_id][:not_tested] += 1
      end
    end
    
    data = resp.values.map {|o| 
      o[:parameter_count] = o.delete(:parameters).uniq.length
      o
    }
    return_success(data)
  end

  def parameters
    compl_project_id = rp[:compl_project_id]
    cr = model.distinct(:parameter_id).where(compliance_project_id: compl_project_id, attribute_id: rp[:attribute_id]).exclude(exception: true).all
    return_success(cr.as_json)
  end

  def variations
    compl_project_id = rp[:compl_project_id]
    cr = model.where(compliance_project_id: compl_project_id, parameter_id: rp[:parameter_id]).exclude(exception: true)
    return_success(cr.map(&:as_json))
  end

  

  # def update(data=nil)
  #   data ||= data_for(:save)
  #   item.set_fields(data, data.keys)
  #   save(item)
  # end

  def project
    @project ||= begin
      id = rp[:project_id]
      App::Models::RevProject[id] || return_errors!("No project found with id: #{id}", 404)
    end
  end

  def self.fields
    {
      save: [ :platform_language, :result]
    }
  end
end
