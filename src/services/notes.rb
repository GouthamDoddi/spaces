class App::Services::Notes < App::Services::Base

  def model; Note; end

  def self.fields
    {
      save: [:title, :data, :policy_id, :space]
    }
  end
end