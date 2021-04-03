Sequel.migration do
  change do
    create_table(:challenges) do
      primary_key :id

      String :name
      String :name_ar
      String :description
      
      Integer :section_id

      Integer :project_id
      Integer :attribute_id
      Integer :record_parameter_id
      Integer :entity_id

      Integer :type_id

      String :description_ar

      Date :date
      jsonb :extras, default: '{}'      

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end