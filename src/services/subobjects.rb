class App::Services::Subobjects < App::Services::Base

  def model; Subobject; end


  def list
    cond = {
      object_id: r.params[:object_id]
    }
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :description, :object_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end