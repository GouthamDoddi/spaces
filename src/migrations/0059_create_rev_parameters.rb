Sequel.migration do
  change do
    create_table(:rev_parameters) do
      primary_key :id

      Integer :framework_type_id
      String :parameter_name
      String :code, size: 8
      String :mandate, size: 5
      column :stage_gates, 'Integer[]'
      Integer :attribute_id
      String :attribute_name
      Integer :section_id
      String :section_name
      String :section_name_ar
      Integer :order
      String :description, text: true

      json :extras

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end