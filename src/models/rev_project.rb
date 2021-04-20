class App::Models::RevProject < Sequel::Model
  plugin :pg_array_associations
  
  many_to_pg_array :compliance_projects, class: 'App::Models::RevComplianceProject', key: :project_ids,  order: :created_at

  # many_to_pg_array :main_compliance_projects, class: 'App::Models::RevComplianceProject', key: :project_ids,  dataset: (lambda do |r| 
  #   r.associated_dataset.where(type_id: project_type_id, Sequel.pg_array(:project_ids).any => [id] )
  # end), limit: 1

  attr_accessor :start_date, :end_date

  def after_save
    o =  main_compliance_project || App::Models::RevComplianceProject.new(project_ids: [id])
    data = values.slice(:prject_name, :prject_name_ar, :project_description_ar, :project_description, :consumer_type_ids, :spoc_ids, :owner_id)
    o.set_fields(data, data.keys )
    o.type_id = project_type_id
    o.start_date = start_date
    o.save
  end

  def validate
    super
    validates_presence [:project_name, :owner_id, :project_type_id]
    # validates_includes ROLES, :role
  end

  def main_compliance_project
    compliance_projects.detect{_1.type_id == project_type_id}
  end

  def dates
    { start_date: compliance_projects.min{_1.start_date <=> _2.start_date}&.start_date, 
      last_date: compliance_projects.max{_1.end_date <=> _2.end_date}&.end_date }
  end

  def progress
    0
  end

  def compliance_records_count
  end

  def issues_count
    0
  end

  def challenges_count
    0
  end

  def pos(options={})
    as_json(options)
  end
  
end

