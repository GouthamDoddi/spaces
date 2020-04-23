Sequel.migration do
  change do
    create_table(:beneficiary_segments) do
      primary_key :id

      String :name, size: 100
      String :description
      TrueClass :active, :default => true
      String :type, size: 30
      foreign_key :parent_id, :beneficiary_segments

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end


# # DATABASE_URL="postgres://izwwyour:gTUiQ167KffSpgq-IaWsiLkEzyRMPDvX@arjuna.db.elephantsql.com:5432/izwwyour" rake db:migrate

# # DATABASE_URL="postgres://izwwyour:gTUiQ167KffSpgq-IaWsiLkEzyRMPDvX@arjuna.db.elephantsql.com:5432/izwwyour" rake db:migrate\[0\]