class App::Services::Formulation::SectionContents < App::Services::Base

  def model; SectionContent; end

  def cond
    { section_id: r.params[:section_id], type: r.params[:type] }
  end

  def list
    data = model.where(cond)
    if rp[:parameter_id].to_i > 0
      data = data.where(parameter_id: rp[:parameter_id].to_i).first&.to_pos || {}
      return_success(data)
    else
      return_success(data.map(&:to_pos))
    end
  end

  def create
    obj = model.new(data_for(:create))
    obj.type = cond[:type]
    obj.section_id = cond[:section_id]
    save(obj)
  end


  def self.fields
    {
      create: [
        :name, :description, :section_id, :type, :kb_type, :parameter_id
      ],

      save: [
        :name, :description
      ]
    }
  end
end