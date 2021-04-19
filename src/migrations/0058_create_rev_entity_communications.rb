Sequel.migration do
  change do
    create_table(:rev_entity_communications) do
      primary_key :id

      String :subject
      Integer :entity_id
      column :user_ids, 'integer[]'
      String :details, text: true
      String :purpose
      json :extras

      TrueClass :active, :default => true
      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end