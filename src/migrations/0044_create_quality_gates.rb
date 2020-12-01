Sequel.migration do
  change do
    create_table(:quality_gates) do
      primary_key :id

      String :name, size: 80
      String :code, size: 10
      String :auto_code, size: 15
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