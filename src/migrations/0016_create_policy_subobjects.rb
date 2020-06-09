Sequel.migration do
  change do
    create_table(:policy_subobjects) do
      primary_key :id

      String :name
      String :description, text: true
      Integer :policy_id
      Integer :policy_object_id
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end