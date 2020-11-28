class App::Services::ProjectIssues < App::Services::Base

  def model; ProjectIssue; end


  def list
    return_success(model.where(project_id: rp[:project_id]).order(Sequel.desc(:created_at)).all.map(&:to_pos))
  end

  def self.fields
    {
      save: [ :name, :description, :project_id, :language, :images, :status ]
    }
  end
end