Sequel.migration do
  change do
    create_table(:section_contents) do
      primary_key :id

      String :name, size: 50
      String :description, text: true

      Integer :section_id

      String :type

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end