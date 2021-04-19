class App::Services::ProjectEservices < App::Services::Base


  def model; RevComplianceProject; end

  def list
    cond = { project_id: rp[:project_id]}
    data = model.order(Sequel.desc(:created_at)).where(cond).map do |o|
      hash = o.as_json
      hash[:progress] = o.progress
      hash[:issues_count] = o.issues_count
      hash[:challenges_count] = o.challenges_count
      hash[:compliance_records_count] = o.compliance_records_count
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
        :logo_code, :spoc_ids, :consumer_type_ids
      ]
    }
  end
end