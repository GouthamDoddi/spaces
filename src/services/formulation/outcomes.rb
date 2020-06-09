class App::Services::Formulation::Outcomes < App::Services::Base

  def model; PolicyOutcome; end


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
        :outcome_id, :description, :policy_id
      ],

      save: [
        :outcome_id, :description
      ]
    }
  end
end