Sequel.migration do
  change do
    create_table(:policy_outcomes) do
      primary_key :id

      Integer :outcome_id
      Integer :policy_id
      String :description, text: true

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end