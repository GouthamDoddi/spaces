class App::Services::RevProjects < App::Services::Base


  def model; RevProject; end

  def report
    cond = {owner_id: rp[:entity_id]}.compact
    resp = {compliance_projects_completed: 0, compliance_projects_in_progress: 0, issues_count: 0, challenges_count: 0, total_projects: 0}
    model.eager(:compliance_projects => :compliance_records).where(cond).all.each do |p|
      completed = p.compliance_projects.sum{|o| o.completed? ? 1 : 0}
      in_progress = p.compliance_projects.length - completed
      resp[:compliance_projects_completed] += completed
      resp[:compliance_projects_in_progress] += in_progress
    end

    return_success(resp)
  end

  def list
    cond = { owner_id: rp[:entity_id]}
    data = model.eager(:compliance_projects).order(Sequel.desc(:created_at)).where(cond.compact).map do |o|
      hash = o.as_json
      hash[:progress] = o.progress
      hash[:issues_count] = o.issues_count
      hash[:challenges_count] = o.challenges_count
      hash[:compliance_records_count] = o.compliance_records_count
      hash[:compliance_project] = o.main_compliance_project.as_json
      hash.merge!(o.dates)
    end
    return_success(data)
  end

  def create
    obj = model.new(data_for(:save))
    save(obj)
  end

  def self.fields
    {
      save: [
        :project_name, :project_name_ar, :project_description, :project_description_ar, 
        :sponsor_id, :owner_id, :project_type_id, :consumer_type_ids, :start_date, :end_date,
        :logo_code, :spoc_ids, :consumer_type_ids, :short_name
      ]
    }
  end
end












