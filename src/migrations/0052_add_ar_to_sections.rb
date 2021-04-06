Sequel.migration do
  change do
    alter_table(:policy_sections) do
      add_column(:name_ar, String)
      add_column(:description_ar, String)
    end
  end
end