class App::Services::Formulation::UserRoles < App::Services::Base
  def model; App::Models::User; end
  
  def auth_fld; :authorization.pg_jsonb; end

  def list
    data = model.where(auth_fld.contains({'policies': {"#{rp[:id]}": rp[:role_id]}}))
    return_success(data.map{_1.as_json.slice('id', 'email', 'first_name', 'last_name' )})
  end

  def create
    if (uid = params[:user_id]) && (user=model[uid])
      user.add_role('policies', rp[:id].to_s, rp[:role_id].to_i)
      save(user)
    else
      return_errors!("User not found")
    end
  end

  def delete
    user = model[params[:user_id]]
    user.authorization['policies'].delete(rp[:id].to_s)
    save(user)
  end
end




# select * from users where(authorization -> 'policies' ->> '1')
# 	orders
# WHERE
# 	info -> 'items' ->> 'product' = 'Diaper'