Sequel.migration do
  change do
    create_table(:rev_resources) do
      primary_key :id

      # Integer :owner_id
      Integer :project_id
      Integer :compliance_project_id

      Integer :type_id
      jsonb :attachments, default: '[]'

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end