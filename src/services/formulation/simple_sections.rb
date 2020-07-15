class App::Services::Formulation::SimpleSections < App::Services::Base

  def model; SimpleSection; end


  def self.fields
    {
      save: [
        :name, :tags, :description
      ]
    }
  end
end