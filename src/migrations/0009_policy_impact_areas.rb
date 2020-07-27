Sequel.migration do
  change do
    create_table(:policy_impact_areas) do
      primary_key :id

      String :name, size: 40
      Integer :outcome_id
      Integer :policy_id
      String :description, text: true

      Integer :beneficiary_segment_id
      degree_enum :impact
      degree_4_level_enum :impact_correlation
      # Integer :impact_id
      # Integer :impact_correlation_id #, elements: ['high-neg', 'low-neg', 'low-pos', 'high-pos']

      TrueClass :active, :default => true

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end