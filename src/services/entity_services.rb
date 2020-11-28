class App::Services::EntityServices < App::Services::Base

  def model; EntityService; end

  def list
    return_success(model.where(entity_id: rp[:entity_id]).order(Sequel.desc(:created_at)).all.map(&:to_pos))
  end

  def self.fields
    {
      save: [ :name, :description, :category_id, :type_id, :entity_id ]
    }
  end
end