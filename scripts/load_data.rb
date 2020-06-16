objects = [
  [
    'Website', [
      ['Common', ['Is it a Government Website?']],
      ['Registration', ['Does the domain already exist?']],
      ['Authentication', ['Does your Website Require Login?', 'Does it need National ID to Login?', 'Does it allow Social Login?']],
      ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?', ]],
      ['Accessibility', ['Does it need to cater to people with disabilities?']],
      ['EService', ['Will The website provide Eservices?']],
      ['Epayment', ['Will there be any Payment Services?']]
    ]
  ],
  [
    'Mobile', [
      ['Common', ['IIs it a Government Mobile App?']],
      ['Registration', ['Does the Mobile App already exist?']],
      ['Authentication', ['Does your Mobile App Require Login?', 'Does it need National ID to Login?', 'Does it allow Social Login?']],
      ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?', ]],
      ['Accessibility', ['Does it need to cater to people with disabilities?']],
      ['EService', ['Will be Mobile App provide Eservices?']],
      ['Epayment', ['Will there be any Payment Services?']]
    ]
  ],
  [
    'Eservices', [
      ['Common', ['IIs it a Government EService?']],
      ['Eservice Type', ['Are you Adding a new EService to Existing Website or Mobile App?', 'Are you Modifying an existing Eservices to Existing Website or Mobile App?']],
      ['Epayment', ['Will there be any Payment Services?']],
    ]
  ]
  [
    'Website', [
      ['Common', ['Is it a Government Kisosk?']],
      ['Registration', ['Does the Kiosk App already exist?']],
      ['Authentication', ['Does your Kiosk App Require Login?', 'Does it need National ID to Login?']],
      ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?']],
      ['Accessibility', ['Does it need to cater to people with disabilities?']],
      ['EService', ['Will be  App provide Eservices?']],
      ['Epayment', ['Will there be any Payment Services?']]
    ]
  ]
]

  # App::Models::Object.where({}).delete
  # App::Models::Subobject.where({}).delete
  # App::Models::ObjectQuestion.where({}).delete

  # App.db.reset_primary_key_sequence(:objects)
  # App.db.reset_primary_key_sequence(:subobjects)
  # App.db.reset_primary_key_sequence(:objectquestions)
def load_objects(objects)
  objects.each do |arr|
    obj = App::Models::Object.create(name: arr[0])
    arr[1].each do |parr|
      sobj = App::Models::Subobject.create(name: parr[0], object_id: obj.id)
      parr[1].each do |q|
        App::Models::ObjectQuestion.create(name: q, type: 'radio', possible_answers: ['yes', 'no'], subobject_id: sobj.id)
      end
    end
  end
end
