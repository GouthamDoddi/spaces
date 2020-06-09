Sequel.migration do
  change do
    create_table(:policy_queues) do
      primary_key :id

      String :name
      String :description, text: true
      String :sla
      Integer :role_id
      Integer :category_id
      
      String :type, size: 15

      Integer :policy_id
      
      String :status, default: 'pending'
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end