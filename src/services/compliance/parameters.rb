class App::Services::Compliance::Parametes < App::Services::Base

  def model; App::Models::Compliance::RecordParameter; end
  def pfilter; @pfilter ||= (rp[:filter] || '').split(',').map(&:to_i); end
  def list
    puts "filters", pfilter
    parameters = model.where(attribute_id: rp[:attribute_id], project_id: rp[:project_id]).all
                  .group_by {_1.parameter_id}

    
    attr_parameters = AttributeParameter.eager(:wiki_description).where(attribute_id: rp[:attribute_id]).order(Sequel.desc(:created_at)).all
    # ['user_notes', 'user_compliance_type', 'approver_compliance_type',  'status', 'approver_id', 'approver_notes']
      
    data = attr_parameters.map do |p|
      (parameters[p.id] || [nil]).map do |pdata|
        user_data = pdata&.as_json || {}
        
        if pfilter.length > 0 && !pfilter.include?(user_data['user_compliance_type'].to_i)
          nil
        else        
          slice_list = ['user_notes', 'user_compliance_type', 'approver_compliance_type',  'status', 'approver_id', 'approver_notes', 'variation']
          p.as_json
            .merge!(user_data.slice(*slice_list)).merge!(wiki_desc: p.wiki_description&.description)
            .merge!(id: user_data['id'], parameter_id: p.id)
        end
      end.compact
    end.flatten
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
        :user_notes, :user_compliance_type, :parameter_id, :project_id, :variation
      ],

      save: [
        :user_notes, :user_compliance_type, :project_id, :variation
      ],

      approver_update: [
        :approver_notes, :approver_compliance_type
      ]
    }
  end
end