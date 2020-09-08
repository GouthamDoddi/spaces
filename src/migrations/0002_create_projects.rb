Sequel.migration do
  change do
    create_table(:projects) do
      primary_key :id

      String :name, size: 50
      String :sponsor, size: 50
      String :description, text: true
      String :owner
      Integer :type_id
      Integer :category_id

      Date :start_date
      Date :end_date
      

      # beneficiaries
      column :beneficiary_ids, 'integer[]'
      column :profile_ids, 'integer[]'

      # Objects
      column :object_ids, 'integer[]'
      column :subobject_ids, 'integer[]'

      # column :section_ids, 'numeric[]'
      
      column :applied_attribute_ids, 'integer[]'
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end