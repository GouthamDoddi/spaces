Sequel.migration do
  change do
    create_table(:entity_services) do
      primary_key :id

      String :name, size: 80
      Integer :category_id
      Integer :type_id
      String :description, text: true
      Integer :entity_id
      
      json :extras

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end