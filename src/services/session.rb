class App::Services::Session < App::Services::Base

  def login
    return_success!(token: App.cu.token, info: App.cu.user_obj.basic_info, auth: App.cu.user_obj.auth_data)  if current_user
    
    user = User.find(email: params[:email])

    if (user && user.password == params[:password])
      return_success(token: CurrentUser.encoded_token(user), info: user.basic_info, auth: user.auth_data)
    else
      return_errors!("Invalid Email / Password")
    end
  end

  
end