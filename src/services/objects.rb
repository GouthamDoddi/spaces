class App::Services::Objects < App::Services::Base

  def model; Object; end


  def self.fields
    {
      save: [
        :name, :description
      ]
    }
  end
end