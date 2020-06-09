Sequel.migration do
  change do

    create_enum(:degree_enum, %w'low medium high')
    create_enum(:degree_4_level_enum, ['high-neg', 'low-neg', 'low-pos', 'high-pos'])
    
    create_table(:common_values) do
      primary_key :id

      String :name, size: 50
      String :type, size: 25

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end