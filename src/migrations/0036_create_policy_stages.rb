Sequel.migration do
  change do
    create_table(:policy_stages) do
      primary_key :id

      String :name, size: 50
      String :description, text: true

      String :status
      Integer :policy_id

      Date :start_date
      Date :end_date

      Date :actual_start_date
      Date :actual_end_date

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end