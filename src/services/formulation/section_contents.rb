class App::Services::Formulation::SectionContents < App::Services::Base

  def model; SectionContent; end

  def cond
    { section_id: r.params[:section_id], type: r.params[:type] }
  end

  def list
    return_success(model.where(cond).map(&:to_pos))
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
        :name, :description, :section_id, :type, :kb_type
      ],

      save: [
        :name, :description, :kb_type
      ]
    }
  end
end