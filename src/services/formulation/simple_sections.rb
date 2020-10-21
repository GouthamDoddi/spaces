class App::Services::Formulation::SimpleSections < App::Services::Base

  def model; SimpleSection; end

  def names
    res = model.where(id: [rp[:id], rp[:attr_id]].compact).select_hash(:id, :name)
    if(rp[:param_id])
      p = App::Models::AttributeParameter[rp[:param_id]]
      res[p.id] = p.name
    end
    return_success(res)
  end
  
  def self.fields
    {
      save: [
        :name, :tags, :description
      ]
    }
  end
end