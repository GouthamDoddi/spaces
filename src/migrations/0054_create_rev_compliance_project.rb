Sequel.migration do
  change do
    create_table(:rev_compliance_projects) do
      primary_key :id
      Integer :type_id
      String :project_name, size: 100
      String :project_name_ar, size: 100 
      String :project_description, text: true 
      String :project_description_ar, text: true 
      Integer :consumer_type
      Integer :project_spoc
      Date :start_date
      Date :end_date
      String :notes, text: true

      Integer :owner_id

      column :project_ids, 'integer[]'
      column :consumer_type_ids, 'integer[]'
      column :spoc_ids, 'integer[]'
      
      jsonb :attachments, default: '[]'
      jsonb :answers # {[q_id]: answer(yes | no)}
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end

