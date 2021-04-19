Sequel.migration do
  change do
    alter_table(:db_projects) do
      add_column(:description_ar, String)
      add_column(:name_ar, String)
    end

    alter_table(:challenges) do
      add_column(:actual_type, Integer)
    end

    alter_table(:entities) do
      add_column(:logo, String)
    end

  end
end