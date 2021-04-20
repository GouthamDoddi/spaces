class App::Services::RevRecordComments < App::Services::Base


  def model; App::Models::RevComplianceRecordComment; end

  def list
    return_success(model.where(compliance_record_id: rp[:compl_rec_id]))
  end

  def create
    obj = model.new(data_for(:save))
    obj.compliance_record_id = rp[:compl_rec_id]
    save(obj)
  end

  # def update(data=nil)
  #   data ||= data_for(:save)
  #   item.set_fields(data, data.keys)
  #   save(item)
  # end

  def self.fields
    {
      save: [
        :attachments, :comment
      ]
    }
  end
end
