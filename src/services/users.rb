class App::Services::Users < App::Services::Base

  def basic_info
    return_success(CurrentUser.user_obj.basic_info)
  end

  # def model; User; end

  # def self.fields
  #   {}
  # end
end