Sequel.migration do
  change do
    create_table(:project_section_plans) do
      primary_key :id

      String :owner, size: 50
      String :reviewer, size: 50
      String :responsible, size: 50
      Date :target_date
      String :description, text: true
      Integer :project_id
      Integer :section_id

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end