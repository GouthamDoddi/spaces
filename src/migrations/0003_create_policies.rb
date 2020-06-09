Sequel.migration do
  change do
    create_table(:policies) do
      primary_key :id

      String :name, size: 50
      String :description, text: true
      Integer :owner_id
      Integer :family_id
      Integer :policy_category_id
      Date :publication_date
      Integer :policy_status_id
      
      column :beneficiary_ids, 'integer[]'
      column :beneficiary_profile_ids, 'integer[]'
      column :profile_detail_ids, 'integer[]'

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end