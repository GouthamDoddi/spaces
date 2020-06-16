Sequel.migration do
  change do
    create_table(:bill_decrees) do
      primary_key :id

      String :name
      String :doc_ref
      Integer :number
      Date :effective_date
      Integer :policy_id
      String :ownership
      String :passed_by, size: 50
      Integer :version

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end