Sequel.migration do
  change do
    create_table(:rev_compliance_record_comments) do
      primary_key :id
      Integer :compliance_record_id
      String :comment, text: true
      jsonb :attachments, default: '[]'      
      
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end