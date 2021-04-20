Sequel.migration do
  change do
    create_table(:rev_compliance_records) do
      primary_key :id

      Integer :parameter_id
      String :paramter_name
      column :stage_gates, 'Integer[]'
      String :mandate
      Integer :attribute_id
      String :attribute_name
      Integer :section_id
      String :section_name
      String :platform_language, size: 20
      Integer :result # (Full compliant / partially complaint / non compliant)
      jsonb :attachment, default: '[]'
      TrueClass :completed, default: false
      Integer :status # (Open(1) / Submitted(2) / reviewed(3) / accepted(4))
      Integer :compliance_project_id
      Integer :owner_id
      TrueClass :exception, default: false

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end

