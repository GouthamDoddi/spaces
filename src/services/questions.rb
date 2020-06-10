class App::Services::ObjectQuestions < App::Services::Base

  def model; ObjectQuestion; end


  def list
    cond = {
      subobject_id: r.params[:subobject_id]
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
        :name, :type, :possible_answers, :subobject_id
      ],

      save: [
        :name, :type, :possible_answers
      ]
    }
  end
end