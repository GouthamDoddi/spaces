class App::Models::RevResource < Sequel::Model

  def before_save
    res = App::Models::RevComplianceProject[compliance_project_id]
    self.type_id = res.type_id
    super
  end


  def validate
    super
    validates_presence [:compliance_project_id,  :project_id]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
