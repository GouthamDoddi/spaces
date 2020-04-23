Sequel.migration do
  change do
    create_table(:notes) do
      primary_key :id

      String :title, size: '100'
      String :data, text: true
      foreign_key :policy_id, :policies
      String :space, size: 20

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end