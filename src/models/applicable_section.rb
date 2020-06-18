
class App::Models::ApplicableSection < Sequel::Model

  one_to_one :policy_section, class: 'App::Models::PolicySection', primary_key: :section_id, key: :id
  many_to_one :project, class: 'App::Models::Compliance::Project', key: :project_id

  one_to_many :parameters, class: 'App::Models::Compliance::RecordParameter'

  one_to_many :policy_section_attributes, class: 'App::Models::PolicySectionAttribute', key: :parent_id, primary_key: :section_id

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
