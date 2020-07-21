class App::Services::Formulation::PolicySectionAttributes < App::Services::Base

  def model; PolicySectionAttribute; end

  def list
    return_success(model.where(policy_id: r.params[:policy_id], parent_id: r.params[:section_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    obj.parent_id = r.params[:section_id]
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :tags, :description, :policy_id, :parent_id, :order
      ],

      save: [
        :name, :tags, :description, :order
      ]
    }
  end
end