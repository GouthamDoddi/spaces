Sequel.migration do
  change do
    create_table(:extras) do
      primary_key :id

      String :name, size: 20
      Integer :ref_id
      String :ref, size: 16
      json :data

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end