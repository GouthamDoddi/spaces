class App::Services::Formulation::Subobjects < App::Services::Base

  def model; PolicySubobject; end

  def list
    return_success(model.where(policy_id: r.params[:policy_id], policy_object_id: r.params[:object_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :policy_id, :policy_object_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end