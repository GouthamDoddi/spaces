class App::Models::Compliance::RecordParameter < Sequel::Model
  one_to_one :wiki_description, class: 'App::Models::SectionContent', key: :parameter_id, primary_key: :parameter_id, conditions: {type: 'steps'}

  one_to_one :project, class: 'App::Models::Compliance::Project', primary_key: :project_id, key: :id

  one_to_one :parameter, class: 'App::Models::AttributeParameter', primary_key: :parameter_id, key: :id
  # one_to_many :applicable_sections

  def validate
    super
    # validates_presence [:name, :owner_id, :type_id]
    # validates_presence [:name]
    validates_unique [:parameter_id, :variation]
  end

end