Sequel.migration do
  change do
    create_table(:risks) do
      primary_key :id

      String :statement, text: true
      String :additional_notes, text: true
      String :mitigation_measures, text: true
      TrueClass :active, :default => true
      foreign_key :policy_category_id, :policy_constants
      foreign_key :policy_id, :policies

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end