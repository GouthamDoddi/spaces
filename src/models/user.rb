class App::Models::User < Sequel::Model
  include BCrypt

  # Steering commitee
  # Admin
  ROLES = [0, 1]

  def validate
    super
    validates_presence [:first_name, :email, :role, :encoded_password]
    validates_unique :email
    validates_includes ROLES, :role
  end

  def password
    @password ||= Password.new(encoded_password)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.encoded_password = @password
  end

  def name
    "#{first}"
  end

end