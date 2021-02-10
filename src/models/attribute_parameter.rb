class App::Models::AttributeParameter < Sequel::Model

  one_to_many :record_parameters, class: 'App::Models::Compliance::RecordParameter', key: :parameter_id

  one_to_one :wiki_description, class: 'App::Models::SectionContent', key: :parameter_id, primary_key: :id, conditions: {type: 'steps'}

  one_to_one :user_parameter, class: 'App::Models::Compliance::RecordParameter', key: :parameter_id, primary_key: :id do |ds|
    ds.where(user_id: App.cu.id)
  end

  many_to_one :policy_section_attribute, key: :attribute_id

  Gates = ["Pre Engagement", "Content Engagement", "Service Request", "Post Request", "Post Fulfilment", "Questionnaire",]
  TestMethods = ["Testing", "Questionnaire", "Evidence", "Interview"]

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
