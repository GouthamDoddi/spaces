Sequel.migration do
  change do
    create_table(:users) do
      primary_key :id

      String :first_name, size: 50
      String :last_name, size: 50
      String :email, size: 100
      String :encoded_password, size: 200
      String :username, size: 25

      Integer :role
      TrueClass :active, :default => true

      jsonb :authorization

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end