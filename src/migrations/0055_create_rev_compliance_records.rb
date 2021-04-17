Sequel.migration do
  change do
    create_table(:rev_compliance_records) do
      primary_key :id

      Integer :parameter_id
      String :paramter_name
      Integer :stage_gate
      Integer :mandate
      Integer :attribute_id
      String :attribute_name
      Integer :section_id
      String :section_name
      String :platform_language, size: 20
      Integer :result # (Full compliant / partially complaint / non compliant)
      jsonb :attachment, default: '[]'
      TrueClass :completed, default: false
      Integer :status # (Submitted(1) / reviewed(2) / accepted(3))
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end

