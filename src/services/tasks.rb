class App::Services::Tasks < App::Services::Base

  def model; Task; end

  def self.fields
    {
      save: [:title, :data, :policy_id, :start_date, :end_date, :space]
    }
  end
end