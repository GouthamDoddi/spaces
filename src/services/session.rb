class App::Services::Session < App::Services::Base

  def login
    if current_user
      obj = App.cu.user_obj
      return_success!(token: App.cu.token, info: obj.basic_info, 
        auth: obj.auth_data, entity_auth: obj.auth, all_roles: obj.all_roles
      )
    end
    
    user = User.find(email: params[:email])

    if (user && user.password == params[:password])
      return_success(token: CurrentUser.encoded_token(user), info: user.basic_info, auth: user.auth_data, 
        entity_auth: user.auth, all_roles: user.all_roles)
    else
      return_errors!("Invalid Email / Password")
    end
  end

  
end