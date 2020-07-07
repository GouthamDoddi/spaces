Sequel.migration do
  change do
    create_table(:roles) do
      primary_key :id

      String :name, size: 50
      String :description, text: true
      # Integer :user_id
      TrueClass :active, :default => true

      json :permissions

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end