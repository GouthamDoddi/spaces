class App::Services::RevCases < App::Services::Base


  def model; RevCase; end

  def list
    cond = { project_id: rp[:project_id]}
    data = model.order(Sequel.desc(:created_at)).where(cond).map do |o|
      hash = o.as_json
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
    data ||= data_for(:submit)
    item.set_fields(data, data.keys)
    item.status = 'submitted'
    save(item)
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
      # [{name, code}, {}, {}]
      # save: [
      #   [:compliance_project_id, :section_id, 
      #   :attribute_id, :parameter_id, :category_id, :priority, :name, :description, 
      #   :attachments, :ground_id, :ground_comment]
      # ]
    }
  end
end
