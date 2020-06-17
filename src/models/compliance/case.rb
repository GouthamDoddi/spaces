
class App::Models::Compliance::Case < Sequel::Model

  many_to_one :section, key: :section_id, class: 'App::Models::PolicySection'
  many_to_one :attribute, key: :attribute_id, class: 'App::Models::PolicySectionAttribute'

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
