
class App::Models::ApplicableSection < Sequel::Model

  one_to_one :policy_section, class: 'App::Models::PolicySection', primary_key: :section_id, key: :id
  many_to_one :project, class: 'App::Models::Compliance::Project', key: :id

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
