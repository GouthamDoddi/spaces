class App::Services::Formulation::SimpleSections < App::Services::Base

  def model; SimpleSection; end

  def names
    return_success(model.where(id: [rp[:id], rp[:attr_id]].compact).select_hash(:id, :name))
  end
  def self.fields
    {
      save: [
        :name, :tags, :description
      ]
    }
  end
end