class App::Services::CaseGrounds < App::Services::Base


  def model; CaseGround; end

  def list
    data = App::Models::CaseGround.eager(:cases).all

    return_auccess(data.as_json.merge!({cases: data.cases.length}))
  end

  
  def self.fields
    {
      save: [:name, :description, :attachments]
      # [{name, code}, {}, {}]
      # save: [
      #   [:compliance_project_id, :section_id, 
      #   :attribute_id, :parameter_id, :category_id, :priority, :name, :description, 
      #   :attachments, :ground_id, :ground_comment]
      # ]
    }
  end
end
