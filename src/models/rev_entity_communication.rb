class App::Models::RevEntityCommunication < Sequel::Model
  def validate
    super
    validates_presence [:user_ids, :subject]

    # validates_unique :email
    # validates_includes ROLES, :role
  end
end

