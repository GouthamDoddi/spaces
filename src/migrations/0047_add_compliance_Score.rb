Sequel.migration do
  up do
    add_column :record_parameters, :compliance_score, Float
  end

  down do
    drop_column :record_parameters, :compliance_score
  end
end