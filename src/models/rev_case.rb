
class App::Models::RevCase < Sequel::Model


  def validate
    super
    validates_presence [:entity_id, :project_id, :category_ids]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
