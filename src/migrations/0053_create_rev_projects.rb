Sequel.migration do
  change do
    create_table(:rev_projects) do
      primary_key :id
      String :project_name, size: 100
      String :project_name_ar, size: 100 
      String :project_description, text: true 
      String :project_description_ar, text: true 
      Integer :sponsor_id 
      Integer :owner_id
      Integer :project_type_id
      String :logo_code
      
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end