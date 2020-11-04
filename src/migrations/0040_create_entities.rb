Sequel.migration do
  change do
    create_table(:entities) do
      primary_key :id

      String :name, size: 80
      Integer :ar_name, size: 80
      String :short_name, size: 16
      Integer :type_id
      String :focal_point_name, size: 60
      String :focal_point_email, size: 60
      String :focal_point_mobile, size: 30
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