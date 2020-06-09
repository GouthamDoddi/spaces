class App::Services::ProfileDetails < App::Services::Base

  def model; ProfileDetail ; end


  def list
    cond = {
      beneficiary_profile_id: r.params[:beneficiary_profile_id]
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
        :name, :description, :beneficiary_profile_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end