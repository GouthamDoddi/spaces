
class App::Models::RevCase < Sequel::Model

  many_to_one :compliance_project, class: 'App::Models::RevComplianceProject', key: :compliance_project_id
  many_to_one :entity, class: 'App::Models::Entity'

  def validate
    super
    validates_presence [:entity_id, :project_id, :category_ids]
    if(status == 'approved' || status == 'rejected')
      validates_presence [:agent_comment]
    end
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
