Sequel.migration do
  change do
    create_table(:policy_op_tasks) do
      primary_key :id

      String :name, size: 50
      String :description, text: true

      Integer :role_id
      Integer :application_type
      Integer :order
      Integer :policy_id

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end