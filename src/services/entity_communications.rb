class App::Services::EntityCommunications < App::Services::Base

  def model; RevEntityCommunication; end


  def list
    return_success(model.where(entity_id: rp[:entity_id], created_by: App.cu.id).order(Sequel.desc(:created_at)).all.map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:save))
    obj.entity_id = rp[:entity_id]
    save(obj)
  end

  def self.fields
    {
      save: [ :subject, :details, :user_ids, :purpose, :entity_id ]
    }
  end
end