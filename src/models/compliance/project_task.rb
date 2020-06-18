
class App::Models::Compliance::ProjectTask < Sequel::Model
  many_to_one :case_rec, class: 'App::Models::Compliance::Case', key: :case_id

  many_to_one :section
  many_to_one :attribute

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end
end
