Sequel.migration do
  change do
    create_table(:object_questions) do
      primary_key :id

      String :name, text: true
      String :type
      Integer :subobject_id
      Integer :policy_id

      column :possible_answers, 'VARCHAR(255)[]'
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end