Sequel.migration do
  change do
    create_table(:rev_questions) do
      primary_key :id
      Integer :compliance_project_type # (Portal(1) / Mobile(2) / eService(3))
      String :question
      column :options, 'VARCHAR(255)[]'
      column :exception_parameter_ids, Integer[]
      column :non_compliance_parameter_ids, Integer[]
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end