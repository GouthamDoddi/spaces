class App::Models::Compliance::RecordParameter < Sequel::Model
  one_to_one :wiki_description, class: 'App::Models::SectionContent', key: :parameter_id, primary_key: :parameter_id, conditions: {type: 'steps'}

  one_to_one :project, class: 'App::Models::Compliance::Project', primary_key: :project_id, key: :id

  one_to_one :parameter, class: 'App::Models::AttributeParameter', primary_key: :parameter_id, key: :id

  many_to_one :attribute, class: 'App::PolicySectionAttribute', primary_key: :attribute_id, key: :id
  # one_to_many :applicable_sections


  def self.mandate_wt
    @mandate_scores ||= { 1 => 3, 2 => 2, 3 => 1 }
  end

  def self.compliance_wt
    @compliance_wt ||= {1 => 5, 2 => 3, 3 => 0, 4 => 1, 5 => 1, 7 => 1, 8 => 1, 9 => 4}
  end


  def mandate_wt
    self.class.mandate_wt
  end

  def compliance_wt
    self.class.compliance_wt
  end

  def after_save
    super
    App::Models::AuditLog.create(changes: previous_changes, resource: 'record_parameter', resource_id: id)    
  end

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    # validates_presence [:name]
    validates_unique [:parameter_id, :variation, :attribute_id, :project_id]
  end

  def closed?; status == 'closed'; end
  def review?; status == 'in-review'; end
  def not_tested?; status == 'open'; end

  def mandate_level_wt
    return 0 unless parameter_id
    mandate_wt[App::Models::AttributeParameter.by_id[parameter_id][:ml]]
  end

  def mandate_level; App::Models::AttributeParameter.by_id[parameter_id][:ml]; end

  def compliance_score
    ( (compliance_wt[user_compliance_type] || 1) / 5.0) * 100
  end

  def score
    ( (compliance_wt[user_compliance_type] || 1) * mandate_level_wt)
  end

  def max_score
    5 * mandate_level_wt
  end

  def final_compl_score
    score / max_score.to_f
  end

end