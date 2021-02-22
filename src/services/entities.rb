class App::Services::Entities < App::Services::Base

  def model; Entity; end

  def list
    if App.cu.role == 0
      super
    else
      entity_ids = App.cu.user_obj.auth_entity_ids
      return_success( entity_ids.present? ? model.where(id: entity_ids).order(Sequel.desc(:created_at)).all.map(&:to_pos) : [])
    end
  end

  def create
    obj = model.new(data_for(:save))
    
    if(obj.save && (obj.focal_point_email.present? ? (user=set_user(obj) && user.id) : true))
      return_success(obj.to_pos)
    else
      return_errors!(obj.errors || user.errors, 400)
    end
  end

  

  def update(data=nil)
    data ||= data_for(:save)
    item.set_fields(data, data.keys)
    ((user = set_user(item)) && (user.errors.blank?)) || user.nil? ? save(item) : return_errors!(user.errors, 400)
  end

  def  add_user
    # email
  end

  def update_user
  end

  def set_user(obj)
    user = nil
    if obj.focal_point_email.present?
      user = User.find(email: obj.focal_point_email) || User.new(name: obj.focal_point_name, email: obj.focal_point_email, temp_token: SecureRandom.uuid)
      user.set_entity(obj.id, 8)
      # byebug
      if(!user.save)
        puts "Unable to save user #{user.errors}"
      end
    end
    user
  end
  
  def self.fields
    {
      save: [ :name, :ar_name, :short_name, :type_id, :focal_point_name, :focal_point_email, :focal_point_mobile, :notes]
    }
  end
end