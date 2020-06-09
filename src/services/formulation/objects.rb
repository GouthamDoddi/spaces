class App::Services::Formulation::Objects < App::Services::Base

  def model; PolicyObject; end

  def list
    return_success(model.where(policy_id: r.params[:policy_id]).map(&:to_pos))
  end


  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :policy_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end