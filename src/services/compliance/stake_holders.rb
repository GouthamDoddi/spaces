class App::Services::Compliance::StakeHolders < App::Services::Base

  def model; ProjectStakeHolder; end


  def list
    cond = {
      project_id: r.params[:project_id]
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
        :name, :role_id, :email, :project_id, :status
      ],

      save: [
        :name, :role_id, :email, :status
      ]
    }
  end
end