class App::Services::EntityCommunications < App::Services::Base

  def model; EntityCommunication; end


  def self.fields
    {
      save: [ :name, :notes, :date ]
    }
  end
end