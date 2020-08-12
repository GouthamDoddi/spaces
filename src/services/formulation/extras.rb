class App::Services::Formulation::BillDecrees < App::Services::Base

  def model; Extra; end



  def self.fields
    {
      create: [
        :name, :doc_ref, :number, :ownership,
        :effective_date, :policy_id, :passed_by, :version
      ],

      save: [
        :name, :doc_ref, :number, :ownership,
        :effective_date, :passed_by, :version
      ]
    }
  end
end