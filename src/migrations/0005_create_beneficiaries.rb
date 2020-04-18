Sequel.migration do
  change do
    create_table(:beneficiaries) do
      primary_key :id

      foreign_key :beneficiary_segment_id, :beneficiary_segments
      foreign_key :beneficiary_sub_segment_id, :beneficiary_segments
      foreign_key :beneficiary_impact_id, :policy_constants
      foreign_key :policy_id, :policies

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end