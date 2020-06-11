Sequel.migration do
  change do
    create_table(:policy_sections) do
      primary_key :id

      String :name
      String :description, text: true
      Integer :policy_id

      column :tags, 'VARCHAR(60)[]'

      column :risk_ids, 'integer[]'
      column :impact_area_ids, 'integer[]'
      column :benefit_ids, 'integer[]'
      column :outcome_ids, 'integer[]'
      column :impl_domain_ids, 'integer[]'

      column :beneficiary_ids, 'integer[]'
      column :beneficiary_profile_ids, 'integer[]'
      column :profile_detail_ids, 'integer[]'


      column :object_ids, 'integer[]'
      column :subobject_ids, 'integer[]'
      column :question_ids, 'integer[]'

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end