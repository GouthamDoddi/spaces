class App::Services::Formulation::ImpactAreas < App::Services::Base

  def model; PolicyImpactArea; end

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
        :beneficiary_segment_id, :impact_correlation, :impact, :description, :policy_id
      ],

      save: [
        :beneficiary_segment_id, :impact_correlation, :impact, :description
      ]
    }
  end
end
