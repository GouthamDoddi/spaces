class App::Services::Compliance::Cases < App::Services::Base

  def model; App::Models::Compliance::Case; end

  def list
    cond = { section_id: rp[:section_id], user_id: App.cu.id}
    cond[:attribute_id] = rp[:attribute_id] if rp[:attribute_id] > 0
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.user_id = App.cu.id
    obj.section_id = rp[:section_id]
    obj.attribute_id = rp[:attribute_id]
    obj.beneficiary_name = App.cu.user_obj.first_name
    save(obj)
  end

  def self.fields
    {
      create: [
        :title, :description, :type_id, :status, category_id, :priority
      ],

      save: [
        :title, :description, :type_id, :status, category_id, :priority, :closure_comments
      ]
    }
  end
end