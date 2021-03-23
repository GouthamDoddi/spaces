Sequel.migration do
  up do
    add_column :record_parameters, :compliance_score, Float
    add_column :entities, :description, String, text: true
    add_column :entities, :description_ar, String, text: true
  end

  down do
    drop_column :record_parameters, :compliance_score
    drop_column :entities, :description
    drop_column :entities, :description_ar
  end
end