class App::Services::Formulation::Context < App::Services::Base

  def model; PolicyTrigger; end

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
        :name, :trigger_type_id, :policy_id, :notes
      ],

      save: [
        :name, :trigger_type_id, :notes
      ]
    }
  end
end