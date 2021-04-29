class App::Services::RevCases < App::Services::Base


  def model; RevCase; end

  def list
    cond = { project_id: rp[:project_id]}.compact
    data = model.eager(:compliance_project, :entity).order(Sequel.desc(:created_at)).where(cond).map do |o|
      hash = o.as_json
      hash[:project_name] = o.compliance_project&.project_name
      hash[:entity_name] = o.entity&.name
      hash
    end
    return_success(data)
  end


  def create
    obj = model.new(data_for(:create))
    obj.entity_id = project.owner_id
    obj.project_id = project.id
    obj.status = 'created'
    save(obj)
  end

  def update
    data ||= data_for(:save)
    item.set_fields(data, data.keys)
    item.status = 'submitted'
    save(item)
  end

  def approve
    data ||= data_for(:manage)
    item.set_fields(data, data.keys)
    item.status = 'approved'
  end


  def reject
    data ||= data_for(:manage)
    item.set_fields(data, data.keys)
    item.status = 'rejected'
  end



  def project
    @project ||= begin
      id = rp[:project_id]
      App::Models::RevProject[id] || return_errors!("No project found with id: #{id}", 404)
    end
  end

  def self.fields
    {
      create: [:compliance_project_id, :section_id, 
      :attribute_id, :parameter_id, :category_ids, :priority],

      save: [:name, :description, :attachments],

      manage: [:agent_comment, :ground_id, :ground_comment]
      # [{name, code}, {}, {}]
      # save: [
      #   [:compliance_project_id, :section_id, 
      #   :attribute_id, :parameter_id, :category_id, :priority, :name, :description, 
      #   :attachments, :ground_id, :ground_comment]
      # ]
    }
  end
end
