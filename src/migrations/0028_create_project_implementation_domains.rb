Sequel.migration do
  change do
    create_table(:project_implementation_domains) do
      primary_key :id

      String :domain
      String :owner
      Integer :project_id
      
      String :status, default: 'pending'
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end