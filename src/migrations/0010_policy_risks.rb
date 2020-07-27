Sequel.migration do
  change do
    create_table(:policy_risks) do
      primary_key :id

      String :name, size: 40
      Integer :risk_id
      Integer :policy_id
      String :description, text: true
      degree_4_level_enum :probability
      degree_enum :impact

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end