Sequel.migration do
  change do
    create_table(:record_parameters) do
      primary_key :id


      Integer :user_id
      Integer :section_id
      Integer :attribute_id

      Integer :parameter_id
      Integer :project_id
      
      String :user_notes, text: true
      Integer :user_compliance_type

      String :approver_notes, text: true
      Integer :approver_compliance_type
      Integer :aprrover_id

      String :status
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end