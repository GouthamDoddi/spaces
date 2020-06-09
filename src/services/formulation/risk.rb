class App::Services::Formulation::Risk < App::Services::Base

  def model; PolicyRisk; end

  def list
    return_success(model.where(policy_id: r.params[:policy_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def list
    return_success(model.where(policy_id: r.params[:policy_id]).map(&:to_pos))
  end

  def self.fields
    {
      create: [
        :probability, :risk_id, :impact, :description, :policy_id
      ],

      save: [
        :probability, :risk_id, :impact, :description
      ]
    }
  end
end