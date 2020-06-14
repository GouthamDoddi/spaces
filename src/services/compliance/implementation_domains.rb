class App::Services::Compliance::ImplementationDomains < App::Services::Base

  def model; ProjectImplementationDomain; end


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

  def self.fields
    {
      create: [
        :domain, :owner, :project_id, :status
      ],

      save: [
        :domain, :owner, :status
      ]
    }
  end
end