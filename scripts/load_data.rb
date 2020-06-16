# objects = [
#   [
#     'Website', [
#       ['Common', ['Is it a Government Website?']],
#       ['Registration', ['Does the domain already exist?']],
#       ['Authentication', ['Does your Website Require Login?', 'Does it need National ID to Login?', 'Does it allow Social Login?']],
#       ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?', ]],
#       ['Accessibility', ['Does it need to cater to people with disabilities?']],
#       ['EService', ['Will The website provide Eservices?']],
#       ['Epayment', ['Will there be any Payment Services?']]
#     ]
#   ],
#   [
#     'Mobile', [
#       ['Common', ['IIs it a Government Mobile App?']],
#       ['Registration', ['Does the Mobile App already exist?']],
#       ['Authentication', ['Does your Mobile App Require Login?', 'Does it need National ID to Login?', 'Does it allow Social Login?']],
#       ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?', ]],
#       ['Accessibility', ['Does it need to cater to people with disabilities?']],
#       ['EService', ['Will be Mobile App provide Eservices?']],
#       ['Epayment', ['Will there be any Payment Services?']]
#     ]
#   ],
#   [
#     'Eservices', [
#       ['Common', ['IIs it a Government EService?']],
#       ['Eservice Type', ['Are you Adding a new EService to Existing Website or Mobile App?', 'Are you Modifying an existing Eservices to Existing Website or Mobile App?']],
#       ['Epayment', ['Will there be any Payment Services?']],
#     ]
#   ]
#   [
#     'Website', [
#       ['Common', ['Is it a Government Kisosk?']],
#       ['Registration', ['Does the Kiosk App already exist?']],
#       ['Authentication', ['Does your Kiosk App Require Login?', 'Does it need National ID to Login?']],
#       ['Search', ['Does it provide Search in the website?', 'Does it need to Search across the Whole of Government?']],
#       ['Accessibility', ['Does it need to cater to people with disabilities?']],
#       ['EService', ['Will be  App provide Eservices?']],
#       ['Epayment', ['Will there be any Payment Services?']]
#     ]
#   ]
# ]

#   # App::Models::Object.where({}).delete
#   # App::Models::Subobject.where({}).delete
#   # App::Models::ObjectQuestion.where({}).delete

#   # App.db.reset_primary_key_sequence(:objects)
#   # App.db.reset_primary_key_sequence(:subobjects)
#   # App.db.reset_primary_key_sequence(:objectquestions)
# def load_objects(objects)
#   objects.each do |arr|
#     obj = App::Models::Object.create(name: arr[0])
#     arr[1].each do |parr|
#       sobj = App::Models::Subobject.create(name: parr[0], object_id: obj.id)
#       parr[1].each do |q|
#         App::Models::ObjectQuestion.create(name: q, type: 'radio', possible_answers: ['yes', 'no'], subobject_id: sobj.id)
#       end
#     end
#   end
# end


benefs = [
  [
    'Government', [
      ['All', ['All']],
      ['Ministries', ['All', 'Ministry of Energy and Industry', 'Ministry of Interior', 'Ministry of Awqaf and Islamic Affairs', 'Ministry of Finance', 'Ministry of Justice', 'Ministry of Education and Higher Education', 'Ministry of Municipality and Environment', 'Ministry of Public Health', 'Ministry of Culture and Sports', 'Ministry of Economy and Commerce', 'Ministry of Administrative Development, Labor & Social Affairs', 'Ministry of Transport and Communications', 'Ministry of Development Planning and Statistics']],
      ['Agencies & Organizations', ['All', 'Administrative Control and Transparency Authority', 'Amiri Guard', 'Aspire Zone Foundation', 'Center for Empowerment and Elderly Care (ehsan)', 'Childhood Cultural Center', 'Civil Aviation Authority', 'Communications Regulatory Authority', 'Cultural village foundation Katara', 'Doha Exhibition and Convention Centre', 'Education Above All', 'Family Consulting Center (wifaq)', 'General Authority for Minors Affairs', 'General Authority of Customs', 'General Retirement & Social Insurance Authority', 'General Tax Authority', 'Government Communications Office', 'Hamad bin Khalifa University', 'Hamad Medical Corporation', 'Mental Health Friends Association (Weyak)', 'Mowasalat', 'National Human Rights Committee', 'National Tourism Council', 'Orphans Care Center (Dreama)', 'Planning and Statistics Authority', 'Primary Health Care Corporation', 'Protection and Social Rehabilitation Center (aman)', 'Public Prosecution', 'Public Works Authority (Ashghal)', 'Qatar Aeronautical College (QAC)', 'Qatar Assistive Technology Center (mada)', 'Qatar Cancer Society', 'Qatar Chamber', 'Qatar Development Bank', 'Qatar Diabetes Association', 'Qatar Electricity & Water Co.', 'Qatar Financial Centre', 'Qatar Financial Centre Regulatory Authority', 'Qatar Financial Markets Authority', 'Qatar Foundation for Education, Science and Community Development', 'Qatar Free Zones Authority', 'Qatar General Electricity & Water Corporation "KAHRAMAA"', 'Qatar Museums Authority', 'Qatar National Convention Centre', 'Qatar National Library', 'Qatar News Agency', 'Qatar Olympic Committee', 'Qatar Petroleum (QP)', 'Qatar Ports Management Company', 'Qatar Postal Services Company - Qatar Post', 'Qatar Red Crescent Society', 'Qatar Social Work Foundation', 'Qatar University', 'Qatar Voluntary Center', 'Regulatory Authority for Charitable Activities', 'Shafalla center for persons with disabilities', 'Sheikh Abdullah bin Zaid Al Mahmoud Islamic Cultural Center', 'Sheikh Eid Charitable Association', 'Silatech', 'State Audit Bureau', 'Supreme Committee for Delivery and Legacy', 'Supreme Judiciary Council', 'The Shura Council' ]],
      ['Foreign Embassies ', ['All']]
    ]
  ],
  [
    'Individual', [
      ['All', ['All']],
      ['Qatar Nationals'],
      ['Mothers'],
      ['Students'],
      ['Veterans'],
      ['Disabled'],
      ['Elderly/Retired'],
      ['Business Man/Woman'],
      ['Unemployed'],
      ['Non-Resident Qatari'],
      ['Government Officials'],
      ['Expats/Migrant Worker']
    ]
  ],
  [
    'Business', []
  ]
  [
    'NGO', []
  ],
  [
    'Visitor', []
  ]
]

def load_benefs()
  benefs.each do |arr|
    obj = App::Models::Beneficiary.create(name: arr[0])
    (arr[1]).each do |parr|
      sobj = App::Models::Subobject.create(name: parr[0], object_id: obj.id)
      parr[1].each do |q|
        App::Models::ObjectQuestion.create(name: q, type: 'radio', possible_answers: ['yes', 'no'], subobject_id: sobj.id)
      end
    end
  end
end