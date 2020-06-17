Sequel.migration do
  change do
    create_table(:project_tasks) do
      primary_key :id


      Integer :user_id
      Integer :attribute_id
      Integer :section_id
      Integer :case_id

      Integer :project_id
      
      Integer :priority

      String :title
      String :description, text: true
      
      String :status, default: 'open'

      
      String :approver_notes, text: true
      Integer :aprrover_id
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end