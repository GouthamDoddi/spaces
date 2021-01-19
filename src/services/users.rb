class App::Services::Users < App::Services::Base

  def basic_info
    return_success(CurrentUser.user_obj.basic_info)
  end

  # def model; User; end

  # def self.fields
  #   {}
  # end

  def allowed_to_add?
    App.cu.admin? || App.cu.entity_ids.include?(rp[:entity_id])
  end

  def update_password
    user = User.find(temp_token: rp[:token])
    return_errors!('Invalid token', 400) if !user
    user.password = params[:password]
    user.temp_token = nil
    save(user)
  end

  def reset_password

  end

  
  def self.fields
    {
      save: [ :first_name, :last_name, :email, :password, :username, :phone ]
    }
  end
end

