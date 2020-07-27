class App::Services::Compliance::Plans < App::Services::Base

  def model; App::Models::ProjectSectionPlan; end


  def list
    cond = {
      project_id: r.params[:project_id]
    }
    return_success(model.where(cond).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def item
    @item ||= begin
      id = r.params[:id]
      model.find(project_id: r.params[:project_id], section_id: id) || model.new  # return_errors!("No #{model} found with section id: #{id}", 404)
    end
  end

  def self.fields
    {
      create: [
        :owner, :reviewer, :responsible, :target_date, :description, :project_id, :section_id
      ],

      save: [
        :owner, :reviewer, :responsible, :target_date, :description
      ]
    }
  end
end