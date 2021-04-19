class App::Services::ProjectEservices < App::Services::Base


  def model; RevComplianceProject; end

  def list
    cond = { owner_id: rp[:entity_id], type_id: 3}
    data = model.order(Sequel.desc(:created_at)).where(cond).map do |o|
      hash = o.as_json
      
    end
    return_success(data)
  end


  def create
    obj = model.new(data_for(:save))
    obj.owner_id = rp[:entity_id]
    obj.type_id = 3
    save(obj)
  end

  def self.fields
    {
      save: [
        :project_name, :project_name_ar, :project_description, :project_description_ar, 
        :sponsor_id, :owner_id, :start_date, :end_date,
        :logo_code, :spoc_ids, :consumer_type_ids, :project_ids
      ]
    }
  end
end
