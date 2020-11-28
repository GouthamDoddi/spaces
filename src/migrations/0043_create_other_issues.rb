Sequel.migration do
  change do
    create_table(:project_issues) do
      primary_key :id

      String :name, size: 80
      String :language
      String :description, text: true
      Integer :project_id
      Integer :status
      
      jsonb :images, default: '[]'
      json :extras
      

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end