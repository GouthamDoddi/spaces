Sequel.migration do
  change do
    create_table(:entity_communications) do
      primary_key :id

      String :name, size: 80
      DateTime :date
      String :notes, text: true
      json :extras

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end