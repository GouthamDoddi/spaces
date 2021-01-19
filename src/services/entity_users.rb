class App::Services::EntityUsers < App::Services::Base

  def allowed_to_add?
    App.cu.admin? || App.cu.entity_ids.include?(rp[:entity_id])
  end

  def model; User; end

  def list
    entity_ids = App.cu.admin? ? [rp[:entity_id]] : ([rp[:entity_ids]] & App.cu.entity_ids)
    # cond = Sequel.pg_array_op(:entity_ids).overlaps(Sequel.pg_array(entity_ids, :integer))
    cond = :auth.pg_jsonb['entities'].contains([{eid: rp[:entity_id]}])
    return_success(model.where(cond).where(active: true).map(&:to_pos))
  end

  def create
    if allowed_to_add?
      obj = model.new(data_for(:save))
      obj.temp_token = SecureRandom.uuid
      obj.set_entity(rp[:entity_id], params[:role_id])
      save(obj)
    else
      return_errors!('Unauthorized to add', 401)
    end
  end



  def update
    if allowed_to_add?
      # item.entity_ids = (item.entity_ids || []) << rp[:entity_id]
      data = data_for(:save)
      item.set_fields(data, data.keys)
      item.set_entity(rp[:entity_id], params[:role_id])
      save(item)
    else
      return_errors!('Unauthorized to add', 401)
    end
  end

  def delete
    remove
  end
  

  def set_user(obj) 
    
    user.set_entity(obj.id, 8)
    if(!user.save)
      puts "Unable to save user #{user.errors}"
    end
    user
  end

  def self.fields
    {
      save: [ :first_name, :last_name, :email, :password, :username, :phone ]
    }
  end
end

