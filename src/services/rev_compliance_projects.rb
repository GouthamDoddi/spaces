class App::Services::RevComplianceProjects < App::Services::Base


  def model; RevComplianceProject; end

  def list
    cond = :project_ids.pg_array.contains(Sequel.pg_array([rp[:project_id]], Integer))
    data = model.order(Sequel.desc(:created_at)).where(cond).map do |o|
      hash = o.as_json
      
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
        :start_date, :end_date,
        :spoc_ids, :consumer_type_ids, :attachments, :notes
      ]
    }
  end
end
