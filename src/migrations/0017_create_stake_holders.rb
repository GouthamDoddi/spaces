Sequel.migration do
  change do
    create_table(:stake_holders) do
      primary_key :id

      String :name
      Integer :role_id
      String :email
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