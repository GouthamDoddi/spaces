class App::Services::Compliance::Parametes < App::Services::Base

  def model; App::Models::Compliance::RecordParameter; end

  def list
    parameters = AttributeParameter.eager(:user_parameter).where(attribute_id: rp[:attribute_id])
    data = parameters.map do |p| 
      user_data = p.user_parameter&.as_json || {}
      p.as_json.merge!(user_data.slice('user_notes', 'user_compliance_type')).merge!(id: p.user_parameter&.id, parameter_id: p.id)
    end
    return_success(data)
  end

  def create
    obj = model.new(data_for(:create))
    obj.user_id = App.cu.id
    obj.applicable_section_id = rp[:section_id]
    save(obj)
  end

  def self.fields
    {
      create: [
        :user_notes, :user_compliance_type, :parameter_id
      ],

      save: [
        :user_notes, :user_compliance_type
      ]
    }
  end
end