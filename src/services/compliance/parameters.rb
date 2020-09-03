class App::Services::Compliance::Parametes < App::Services::Base

  def model; App::Models::Compliance::RecordParameter; end

  def list
    parameters = model
                  .where(attribute_id: rp[:attribute_id], project_id: rp[:project_id])
                  .reduce({}) {|h, p| h[p.parameter_id] = p; h}

    attr_parameters = AttributeParameter.eager(:wiki_description).where(attribute_id: rp[:attribute_id]).all
    # ['user_notes', 'user_compliance_type', 'approver_compliance_type',  'status', 'approver_id', 'approver_notes']
      

    data = attr_parameters.map do |p| 
      user_data = parameters[p.id]&.as_json || {}
      slice_list = ['user_notes', 'user_compliance_type', 'approver_compliance_type',  'status', 'approver_id', 'approver_notes']
      p.as_json
        .merge!(user_data.slice(*slice_list)).merge!(wiki_desc: p.wiki_description&.description)
        .merge!(id: user_data['id'], parameter_id: p.id)
    end
    return_success(data)
  end

  def create
    obj = model.new(data_for(:create))
    obj.user_id = App.cu.id
    obj.section_id = rp[:section_id]
    obj.attribute_id = rp[:attribute_id]
    obj.status = 'open'
    save(obj)
  end

  def update
    if item.status === 'closed'
      return_errors!("Not Allowed, it's closed!")
    end
    if item.status === 'reviewed'
      item.status = 'open'
    end
    super
  end

  def approver_update
    data ||= data_for(:approver_update)
    item.set_fields(data, data.keys)
    item.approver_id = App.cu.id
    item.status = item.user_compliance_type == item.approver_compliance_type ?  'closed' : 'reviewed'
    save(item)
  end

  def self.fields
    {
      create: [
        :user_notes, :user_compliance_type, :parameter_id, :project_id
      ],

      save: [
        :user_notes, :user_compliance_type, :project_id
      ],

      approver_update: [
        :approver_notes, :approver_compliance_type
      ]
    }
  end
end