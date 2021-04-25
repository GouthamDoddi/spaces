Sequel.migration do
  change do
    create_table(:rev_cases) do
      primary_key :id

      Integer :entity_id
      Integer :project_id
      Integer :compliance_project_id
      Integer :section_id
      Integer :attribute_id
      Integer :parameter_id
      Integer :category_ids
      Integer :priority
      String :name
      String :description, text: true

      String :agent_comment, text: true

      jsonb :attachments, default: '[]'
      String :status # ( submitted / approved / rejected / onHold / created)
      Integer :ground_id
      String :ground_comment, text: true

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end