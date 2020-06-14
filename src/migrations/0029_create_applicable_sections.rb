Sequel.migration do
  change do
    create_table(:applicable_sections) do
      primary_key :id

      Integer :user_id
      Integer :project_id
      Integer :section_id

      column :answers, 'json'

      TrueClass :applicable
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end