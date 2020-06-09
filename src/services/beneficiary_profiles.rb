class App::Services::BeneficiaryProfiles < App::Services::Base

  def model; BeneficiaryProfile; end


  def list
    cond = {
      beneficiary_id: r.params[:beneficiary_id]
    }
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :beneficiary_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end