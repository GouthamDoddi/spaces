class App::Services::Entities < App::Services::Base

  def model; Entity; end

  def list
    cond = App.cu.role == 0 ? {} : { id: App.cu.user_obj.entity_ids.to_a}

    entities = model.eager(:rev_compliance_projects, :rev_compliance_records).where(cond).order(Sequel.desc(:created_at)).all

    data = entities.map do |e|
      total_records = e.rev_compliance_records
      completed = total_records.map{_1.status === 4 }
      h = e.to_pos
      grp = e.rev_compliance_projects.group_by(&:type_id)
      h[:mobile_count] = grp[2]&.length || 0
      h[:portal_count] = grp[1]&.length || 0
      h[:eservices_count] = grp[3]&.length || 0
      h[:progress] = ((completed.length / total_records.length.to_f) * 100).round(2)
      h
    end
    return_success( data )

  end

  # def create
    # obj = model.new(data_for(:save))
    
    # if(obj.save && (obj.focal_point_email.present? ? (user=set_user(obj) && user.id) : true))
    #   return_success(obj.to_pos)
    # else
    #   return_errors!(obj.errors || user.errors, 400)
    # end
  # end

  

  # def update(data=nil)
  #   data ||= data_for(:save)
  #   item.set_fields(data, data.keys)
  #   ((user = set_user(item)) && (user.errors.blank?)) || user.nil? ? save(item) : return_errors!(user.errors, 400)
  # end

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
      # save: [ :name, :ar_name, :short_name, :type_id, :focal_point_name, :focal_point_email, :focal_point_mobile, :notes]
      save: [ :name, :ar_name, :short_name, :type_id, :logo, :description_ar, :notes, :description]
    }
  end
end