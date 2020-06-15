class App::Services::Formulation::AttributeParams < App::Services::Base

  def model; AttributeParameter; end

  def list
    return_success(model.where(attribute_id: r.params[:attr_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.attribute_id = r.params[:attr_id]
    save(obj)
  end


  def self.fields
    {
      create: [
        :name, :mandate_level_id, :description, :attribute_id
      ],

      save: [
        :name, :mandate_level_id, :description
      ]
    }
  end
end