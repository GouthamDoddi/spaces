
class App::Models::RevCase < Sequel::Model


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
