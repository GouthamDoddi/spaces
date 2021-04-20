class App::Services::RevComplianceQuestions < App::Services::Base


  def model; App::Models::RevComplianceProject; end

  def list
    questions = App::Models::RevQuestion.where(compliance_project_type: item.type_id)
    resp = questions.map{|q| q.as_json.merge!({answer: (item.answers || {})[q.id] || 'yes' })}
    return_success(resp)
  end

  def create
    return_errors!("Not Allowed")
  end

  # def update(data=nil)
  #   data ||= data_for(:save)
  #   item.set_fields(data, data.keys)
  #   save(item)
  # end

  def self.fields
    {
      save: [
        :answers
      ]
    }
  end
end
