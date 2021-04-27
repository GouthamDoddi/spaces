class App::Models::RevComplianceProject < Sequel::Model
  plugin :pg_array_associations

  many_to_one :project, class: 'App::Models::RevProject', key: :project_id, order: :start_date

  one_to_many :questions, class: 'App::Models::RevQuestion', key: :compliance_project_type, primary_key: :type_id

  # one_to_many :questions, class: 'App::Models::RevParameter', key: :compliance_project_type, primary_key: :type_id

  one_to_many :compliance_records, class: 'App::Models::RevComplianceRecord', key: :compliance_project_id
  one_to_many :compliance_records_valid, class: 'App::Models::RevComplianceRecord', key: :compliance_project_id, condition: {exception: false}

  pg_array_to_many :rev_projects, class: 'App::Models::RevProject', key: :project_ids,  order: :created_at


  VARIATIONS = {
    '123' => ['en-web', 'ar-web', 'ar-ios', 'en-ios', 'en-android', 'ar-android'],
    '13' => ['en-web', 'ar-web'],
    '23' => ['ar-ios', 'en-ios', 'en-android', 'ar-android'],
    '1' => ['en-web', 'ar-web'],
    '2' => ['ar-ios', 'en-ios', 'en-android', 'ar-android'],
  }
  def after_save
    if column_changed?(:answers)
      create_compliance_records
    end
  end

  def validate
    super
    validates_presence [:project_ids, :project_name]
  end

  def pos(options={})
    as_json(options)
  end



  def variations
    types = rev_projects_dataset.select_map(:project_type_id) << type_id
    types.uniq!
    VARIATIONS[types.sort.join]
  end

  def create_compliance_records
    exceptions = questions.map{_1.exception_parameter_ids}.compact.flatten
    non_compliant = questions.map{_1.non_compliance_parameter_ids}.compact.flatten
    if compliance_records.blank?
      variation_arr = variations
      data = App::Models::RevParameter.where(framework_type_id: type_id).all.reduce([]) do |res, rp|
        rec = rp.as_json(only: [:parameter_name, :mandate, :attribute_id, :attribute_name, :section_id, :section_name, :owner_id]).merge!({
          parameter_id: rp.id,
          compliance_project_id: id,
          stage_gates: Sequel.pg_array(rp.stage_gates, Integer)
        })

        rec.exception = true if exceptions.include?(rp.id)
        rec.result = 3 if non_compliant.include?(rp.id)
        variation_arr.each do |v| 
          rec1 = rec.merge(platform_language: v)
          res << rec1
        end
        res
      end
      App::Models::RevComplianceRecord.multi_insert(data)
    else
      cr = compliance_records_dataset.where(parameter_id: exceptions).update(exception: true)
      cr = compliance_records_dataset.where(parameter_id: non_compliant).update(result: 3)
    end
  end
  
end