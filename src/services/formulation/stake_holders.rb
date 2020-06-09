class App::Services::Formulation::StakeHolders < App::Services::Base

  def model; StakeHolder; end


  def list
    cond = {
      policy_id: r.params[:policy_id],
      type: r.params[:type]
    }
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.type = r.params[:type]
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :role_id, :email, :type, :policy_id, :status
      ],

      save: [
        :name, :role_id, :email, :status
      ]
    }
  end
end