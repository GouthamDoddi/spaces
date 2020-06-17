class App::Services::Compliance::Tasks < App::Services::Base

  def model; App::Models::Compliance::ProjectTask; end

  def for_case
    return_success(model.where(case_id: rp[:case_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.user_id = App.cu.id
    obj.project_id = rp[:project_id]
    obj.status = 'open'
    save(obj)
  end

  def self.fields
    {
      create: [
        :attribute_id, :section_id, :case_id, :title, :description, :priority
      ],

      save: [
        :title, :description, :status, :priority
      ]
    }
  end
end