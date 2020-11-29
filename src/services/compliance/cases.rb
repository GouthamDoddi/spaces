class App::Services::Compliance::Cases < App::Services::Base

  def model; App::Models::Compliance::Case; end

  def list
    cond = { section_id: rp[:section_id], user_id: App.cu.id}
    cond[:attribute_id] = rp[:attribute_id] if rp[:attribute_id] > 0
    return_success(model.where(cond).map(&:to_pos))
  end

  def user_cases
    # ids = App::Models::ApplicableSection.where(project_id: rp[:project_id], user_id: App.cu.id).map(&:section_id)
    ids = project.applied_section_ids

    return_success(model.where(section_id: ids, user_id: App.cu.id).map(&:to_pos))
  end

  def approver_cases
    ids = project.applied_section_ids
    return_success(model.where(section_id: ids).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.user_id = App.cu.id
    obj.section_id = rp[:section_id]
    obj.attribute_id = rp[:attribute_id]
    obj.beneficiary_name = App.cu.user_obj.first_name
    byebug
    save(obj)
  end

  def get
    resp = item.as_json
    resp[:section_name] = item.section.name
    resp[:attribute_name] = item.attribute.name
    return_success(resp)
  end

  def project
    @project ||= App::Models::Compliance::Project[rp[:project_id]]
  end

  def for_project
    return_success(model.where(project_id: rp[:project_id]).order(Sequel.desc(:created_at)).map(&:to_pos))
  end

  def self.fields
    {
      create: [
        :title, :description, :type_id, :status, :category_id, :priority, :project_id
      ],

      save: [
        :title, :description, :type_id, :status, :category_id, :priority, :closure_comments, :project_id
      ]
    }
  end
end