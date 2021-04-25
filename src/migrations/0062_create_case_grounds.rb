Sequel.migration do
  change do
    create_table(:case_grounds) do
      primary_key :id

      # Integer :owner_id
      String :name
      String :name_ar
      String :description, text: true
      String :description_ar, text: true

      String :status

      jsonb :attachments, default: '[]'

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end