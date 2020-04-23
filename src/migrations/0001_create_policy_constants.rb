Sequel.migration do
  change do
    create_table(:policy_constants) do
      primary_key :id

      String :name, size: 100
      String :description
      TrueClass :active, :default => true
      String :type, size: 30

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end