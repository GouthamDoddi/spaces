class App::Models::Compliance::Project < Sequel::Model

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    validates_presence [:name]
    validates_unique :name
  end

  def to_pos
    as_json
  end
end