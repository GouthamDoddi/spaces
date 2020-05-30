Sequel.migration do
  change do
    create_table(:projects) do
      primary_key :id

      String :name, size: 50
      String :sponsor, size: 50
      String :description, text: true
      Integer :owner_id
      Integer :type_id

      Date :start_date
      Date :end_date
      
      column :section_ids, 'numeric[]'

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end