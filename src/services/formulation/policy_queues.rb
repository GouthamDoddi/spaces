class App::Services::Formulation::PolicyQueues < App::Services::Base

  def model; PolicyQueue; end


  def list
    cond = {
      policy_id: r.params[:policy_id],
      type: r.params[:type]
    }
    return_success(model.where(policy_id: r.params[:policy_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.type = r.params[:type]
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :sla, :role_id, :category_id, :type, :policy_id, :status
      ],

      save: [
        :name, :description, :sla, :role_id, :category_id, :status
      ]
    }
  end
end