class App::Services::Compliance::Projects < App::Services::Base

  include Compliance

  def model; Project; end

  def self.fields
    {
      save: [
        :name, :sponsor, :description, 
        :owner_id, :type_id, :start_date, :end_date,
        :section_ids
      ]
    }
  end
end