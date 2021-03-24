# Sequel.migration do
#   change do
#     create_table(:audit_logs) do
#       primary_key :id

#       jsonb :changes
#       String :resource, size: 50
#       Integer :resource_id
#       # String :correlation_id, size: 100
#       jsonb :extras

#       Integer :created_by
#       Integer :updated_by
#       DateTime :created_at, default: Sequel::CURRENT_TIMESTAMP
#       DateTime :updated_at, default: Sequel::CURRENT_TIMESTAMP
#     end
#   end
# end