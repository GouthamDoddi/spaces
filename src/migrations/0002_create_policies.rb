Sequel.migration do
  change do
    create_table(:policies) do
      primary_key :id

      String :title, size: 100
      TrueClass :active, :default => true
      Fixnum :version
      String :owner_email, size: 60
      Date :validity_dt
      Date :inception_dt

      # foreign_key :owner_id, :users
      Integer :owner_id
      foreign_key :policy_category_id, :policy_constants
      foreign_key :policy_state_id, :policy_constants
      foreign_key :policy_stage_id, :policy_constants
      foreign_key :policy_trigger_id, :policy_constants

      Integer :created_by
      Integer :updated_by
      DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
      DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
    end
  end
end


# # DATABASE_URL="postgres://


# fethuvddimttsx:98b059a48ec005e01720de96f8b24dafeb8172da7a53d47b21670d30daa36ca6@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d3m8o8hvjchi1d" rake db:migrate

# # DATABASE_URL="postgres://fethuvddimttsx:98b059a48ec005e01720de96f8b24dafeb8172da7a53d47b21670d30daa36ca6@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d3m8o8hvjchi1d" rake db:migrate\[0\]