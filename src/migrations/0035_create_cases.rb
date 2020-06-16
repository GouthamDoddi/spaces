Sequel.migration do
  change do
    create_table(:cases) do
      primary_key :id


      Integer :user_id
      Integer :attribute_id
      Integer :section_id
      
      String :title
      String :description, text: true
      String :beneficiary_name

      Integer :sla

      Integer :type_id
      String :status, default: 'open'

      Integer :category_id
      Integer :priority

      String :closure_comments, text: true
      
      String :approver_notes, text: true
      Integer :aprrover_id
      
      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end