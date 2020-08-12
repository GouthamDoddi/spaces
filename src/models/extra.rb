
class App::Models::Extra < Sequel::Model
  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end


  def self.fields
    @fields ||= {
      kb: {
        label: 'Knowledge Base',
        name: 'kb',
        form: [
          { label: 'Name', name: 'name', type: 'text', required: true },
          { label: 'Description', name: 'description', type: 'rich', required: false },
          { label: 'Type', name: 'type', type: 'select', required: true, options: [
              { value: 'faq', label: 'FAQ'},
              { value: 'sop', label: 'SOP'},
              { value: 'template', label: 'Template'},
            ]
          },
        ]
      },
      steps: {
        label: 'Steps',
        name: 'steps',
        form: [
          { label: 'Description', name: 'description', type: 'rich', required: true },
        ]
      },
      eg: {
        label: 'Exception Grounds',
        name: 'eg',
        form: [
          { label: 'Name', name: 'name', type: 'text', required: true },
          { label: 'Description', name: 'description', type: 'rich', required: false },
        ]
      },
      opn: {
        label: 'Operating Notes',
        name: 'opn',        
        form: [
          { label: 'Name', name: 'name', type: 'text', required: true },
          { label: 'Description', name: 'description', type: 'rich', required: false },
        ]
      }
    }
  end
end
