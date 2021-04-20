class App::Services::ReferenceData < App::Services::Base


  def model; RevCase; end

  def compliance_projects
    id = rp[:project_id]
    cond = id ? :project_ids.pg_array.contains(Sequel.pg_array([id], Integer)) : {}
    data = App::Models::RevComplianceProject.where(cond)
    return_success(refify(data, :project_name))
  end

  def sections
    data = App::Models::RevParameter.distinct(:section_id).order(Sequel.asc(:section_id))
    return_success(refify(data, :section_name, :section_id))
  end

  def attributes
    data = App::Models::RevParameter.distinct(:attribute_id).order(Sequel.asc(:attribute_id)).where(section_id: rp[:section_id])
    return_success(refify(data, :attribute_name, :attribute_id))
  end

  def parameters
    data = App::Models::RevParameter.order(Sequel.asc(:id)).where(attribute_id: rp[:attribute_id])
    return_success(refify(data, :parameter_name))
  end

  def refify(arr, label=:name, id= :id)
    arr.reduce({}) do |h, o|
      h.merge!({o.id => {value: o.send(id), label: o.send(label)}})
    end
  end
  

  def self.fields
    {
    }
  end
end
