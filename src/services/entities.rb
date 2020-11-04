class App::Services::Entities < App::Services::Base

  def model; Entity; end

  # def list
  #   byebug
  #   super
  # end

  def self.fields
    {
      save: [ :name, :ar_name, :short_name, :type_id, :focal_point_name, :focal_point_email, :focal_point_mobile, :notes]
    }
  end
end