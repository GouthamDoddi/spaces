class App::Models::User < Sequel::Model
  include BCrypt

  # Steering commitee
  # Admin
  ROLES = [0, 1, 2, 3]
  ROLE_MAPPER = ['Admin', 'Steering Commitee', 'Employee', 'Beneficiary']

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

  def role_name; ROLE_MAPPER[role]; end

  def basic_info
    data = as_json(only: [:email, :first_name, :last_name, :role])
    data[:role_name] = role_name
    data
  end

end