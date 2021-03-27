Sequel.migration do
  change do
    alter_table(:db_projects) do
      add_column(:project_status, String)
    end
  end
end