class App::Services::Formulation::BillDecrees < App::Services::Base

  def model; BillDecree; end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def item
    @item ||= begin
      id = r.params[:policy_id]
      model.find(policy_id: id) || return_errors!("No #{model.class} found with policy id: #{id}", 404)
    end
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