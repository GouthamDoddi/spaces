class App::Services::Beneficiaries < App::Services::Base

  def model; Beneficiary; end


  def self.fields
    {
      save: [
        :name, :description
      ]
    }
  end
end