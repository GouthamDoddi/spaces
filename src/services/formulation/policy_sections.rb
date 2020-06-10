class App::Services::Formulation::PolicySections < App::Services::Base

  def model; PolicySection; end

  def list
    return_success(model.where(policy_id: r.params[:policy_id]).map(&:to_pos))
  end

  def create
    obj = model.new(data_for(:create))
    save(obj)
  end

  def self.fields
    {
      create: [
        :name, :tags, :description, :policy_id
      ],

      save: [
        :name, :tags, :description
      ]
    }
  end
end