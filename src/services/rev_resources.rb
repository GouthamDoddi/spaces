class App::Services::RevResources < App::Services::Base

  def model; RevResource; end

  def list
    cond = { project_id: rp[:project_id], type_id: rp[:type_id]}.compact

    return_success(model.where(cond).all.map(&:as_json))
  end

  def create
    obj = model.new(data_for(:save))
    obj.project_id = rp[:project_id]
    save(obj)
  end

  def self.fields
    {
      save: [:attachements, :compliance_project_id]
    }
  end
end