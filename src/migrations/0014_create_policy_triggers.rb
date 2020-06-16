Sequel.migration do
  change do
    create_table(:policy_triggers) do
      primary_key :id

      String :name, size: 60
      Integer :trigger_type_id
      Integer :policy_id
      String :notes, text: true

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end