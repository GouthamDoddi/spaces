Sequel.migration do
  change do
    create_table(:attribute_parameters) do
      primary_key :id

      String :name, size: 50
      String :doc_group, size: 50
      String :description, text: true
      Integer :mandate_level_id
      Integer :attribute_id
      Integer :order
      Integer :weightage

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end