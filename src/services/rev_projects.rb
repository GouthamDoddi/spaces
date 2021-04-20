class App::Services::RevProjects < App::Services::Base


  def model; RevProject; end

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












