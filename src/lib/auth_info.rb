# class Auth
#   def self.data
#     @data ||= begin
#       {
#         compliance: {
#           entity: {
#             profile: {
#               0 =>  'CRUD', 
#               8 => 'UR',
#             },
#             access: {
#               0 => 'CRUD',
#               8 => 'CRUD'
#             },
#             service: {
#               0 => 'CRUD',
#               8 => 'CRU'
#             }
#           }
#         }
#       }
#     end
#   end
# end

# 8 - Entity Manager
# 9 - Tester
# 10 - Consultant
# 11 - Jawda Tester
# 12 - Jawda Test Manager
# 13 - Jawda Policies Manager
# 14 - Jawda Communication Manager
# 15 - Jawda Board Member


# formulation: {
#   policy_profile: '',
#   policy_compliance: '',
#   parameters: '',
#   resources: ''
# }, 
# governance: {
#   dashboards: '',
#   reports: ''
# },
# compliance: {
#   entity: {
#     profile: '',
#     access: '',
#     services: '',
#   },
#   project: {
#     details: '',
#     access: '',
#     parameter: '',
#     other_issues: '',
#     approve_compliance: '',
#   },
#   cases: {

#   }
# }

class AuthInfo
  def self.data
    {
      8 => {
        formulation: {
          resources: 'R'
        }, 
        governance: {
          dashboards: 'RU',
          reports: 'CRUD'
        },
        compliance: {
          entity: {
            profile: 'RU',
            access: 'CRUD',
            services: 'CRU',
          },
          project: {
            details: 'CRU',
            access: 'CRUD',
            parameter: 'U',
            other_issues: 'CRUD',
            approve_compliance: 'U',
            overview: 'R'
          },
          cases: {
            
          }
        }
      },
      9 => {
        formulation: {
          resources: 'R'
        }, 
        governance: {
          dashboards: 'R',
        },
        compliance: {
          project: {
            details: 'R',
            parameter: 'UR',
            other_issues: 'CRUD',
            overview: 'R'
          },
          cases: {
            
          }
        }
      },
      10 => {

      },
      11 => {

      },
      12 => {

      },
      13 => {

      },
      14 => {

      },
      15 => {

      }
    }
  end
end

# # {
# #   0: '', # Super Admin
# #   8: '', # Entity Manager
# #   9: '', # Entity Tester
# #   10: '', # Consultant
# #   11: '', # Jawda Tester
# #   12: '' # Jawda Test Manager

# # }