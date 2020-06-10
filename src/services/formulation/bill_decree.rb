class App::Services::Formulation::BillDecrees < App::Services::Base

  def model; BillDecree; end

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