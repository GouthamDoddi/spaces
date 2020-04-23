
class App::Models::Note < Sequel::Model
  def validate
    super
    validates_presence [:title, :policy_id]
    validates_unique [:title, :policy_id]
    # validates_includes ROLES, :role
  end

  def to_pos; as_json; end
end
