class App::Models::Compliance::Project < Sequel::Model

  # one_to_many :applicable_sections

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    validates_presence [:name]
    validates_unique :name
  end

  def applicable_sections
    App::Models::ApplicationSection.where(project_id: id, applicable: true)
  end

  def to_pos
    as_json
  end
end