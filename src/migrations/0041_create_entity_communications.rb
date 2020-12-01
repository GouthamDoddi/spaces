Sequel.migration do
  change do
    create_table(:entity_communications) do
      primary_key :id

      String :name, size: 80
      Date :date
      String :notes, text: true
      Integer :entity_id
      Integer :user_id
      Integer :type_id
      json :extras

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end