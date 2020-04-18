class App::Helpers::Before
  def self.run!(request)
    clear_thread_space!
    set_auth_token!(request.env['HTTP_AUTHORIZATION'])
    set_ip_address!(request.env['REMOTE_ADDR'] || request.ip)
  end

  def self.clear_thread_space!
    Thread.current[:app_space] = {}
  end

  def self.set_auth_token!(token)
    Thread.current[:app_space][:auth_token] = token
  end

  def self.set_ip_address!(ip)
    Thread.current[:app_space][:ip] = ip
  end
end