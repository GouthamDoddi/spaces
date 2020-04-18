# class App::Models::User < Sequel::Model
#   include BCrypt

#   ROLES = %w[sadmin admin waiter supervisor]

#   def validate
#     super
#     validates_presence [:first_name, :email, :role, :encoded_password]
#     validates_unique :email
#     validates_includes ROLES, :role
#   end

#   def password
#     @password ||= Password.new(encoded_password)
#   end

#   def password=(new_password)
#     @password = Password.create(new_password)
#     self.encoded_password = @password
#   end

#   def name
#     "#{first}"
#   end

# end