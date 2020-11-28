class App::Services::EntityCommunications < App::Services::Base

  def model; EntityCommunication; end


  def list
    return_success(model.where(entity_id: rp[:entity_id], created_by: App.cu.id).order(Sequel.desc(:created_at)).all.map(&:to_pos))
  end

  def self.fields
    {
      save: [ :name, :notes, :date ]
    }
  end
end