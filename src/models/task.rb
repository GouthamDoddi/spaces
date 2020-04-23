
class App::Models::Task < Sequel::Model
  def validate
    super
    validates_presence [:title, :policy_id, :space]
    validates_unique [:title, :policy_id, :space]
    # validates_includes ROLES, :space
  end
end
