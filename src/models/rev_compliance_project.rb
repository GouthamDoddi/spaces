class App::Models::RevComplianceProject < Sequel::Model

  many_to_one :project, class: 'App::Models::RevProject', key: :project_id, order: :start_date

  def validate
    super
    validates_presence [:project_ids, :project_name]
  end

  def pos(options={})
    as_json(options)
  end
  
end

