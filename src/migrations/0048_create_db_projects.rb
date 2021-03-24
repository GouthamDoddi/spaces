Sequel.migration do
  change do
    create_table(:db_projects) do
      primary_key :id


      String :name
      String :description
      
      String :start_date
      String :end_date
      String :entity_id

      column :current_project_ids, 'integer[]'
      column :current_project_names, 'text[]'
      column :project_type, 'text[]'
      
      jsonb :qgate1, default: '{}'
      jsonb :qgate2, default: '{}'
      jsonb :qgate3, default: '{}'
      jsonb :qgate4, default: '{}'
      jsonb :qgate5, default: '{}'

      Float :total_score

      jsonb :score_by_section, default: '{}'
      
      Integer :total_parameters
      Integer :total_completed_parameters

      jsonb :compliance_issues, default: '{}'
      jsonb :compliance_challenges, default: '{}'
      jsonb :compliance_by_mandate_level, default: '{}'
      

      jsonb :extras
      

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
 end
end