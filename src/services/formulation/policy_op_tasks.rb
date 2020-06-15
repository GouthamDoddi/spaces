class App::Services::Formulation::PolicyOpTasks < App::Services::Base

  def model; PolicyOpTask; end


  def list
    cond = {
      policy_id: r.params[:policy_id]
    }
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.policy_id = r.params[:policy_id]
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :role_id, :application_type, :order, :policy_id
      ],

      save: [
        :name, :description, :role_id, :application_type, :order
      ]
    }
  end
end