class Auth
  def self.data
    @data ||= begin
      {
        compliance: {
          entity: {
            profile: {
              0 =>  'CRUD', 
              8 => 'UR',
            },
            access: {
              0 => 'CRUD',
              8 => 'CRUD'
            },
            service: {
              0 => 'CRUD',
              8 => 'CRU'
            }
          }
        }
      }
    end
  end
end



# {
#   0: '', # Super Admin
#   8: '', # Entity Manager
#   9: '', # Entity Tester
#   10: '', # Consultant
#   11: '', # Jawda Tester
#   12: '' # Jawda Test Manager

# }