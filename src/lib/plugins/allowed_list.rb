module SequelPlugin
  module AllowedList

    def self.apply(model)
      model.instance_eval do
        dataset_module do
          def allowed(type=:policies, key=:id)
            if((type == :projects && App.cu.user_obj.role == 5 )||  App.cu.user_obj.role == 0)
              where({})
            # elsif(type == :projects && App.cu.user_obj.id == 11)
            #   where(id: 9)
            # elsif(type == :projects && App.cu.user_obj.id == 10)
            #   where(id: 8)
            elsif (type == :projects && (8..13).include?(App.cu.user_obj.id))
              where(created_by: (8..13).to_a )
            elsif (type == :projects && App.cu.user_obj.id == 15)
              where(key => [17])
            else
              ids = App.cu.user_obj.auth_data[type].keys.map(&:to_i)
              where(key => ids)
            end
          end
          
          def for_current_user
            if App.cu.admin?
              puts "Admin or no entity_ids"
              where({})
            else
              where(owner_id: App.cu.user_obj.auth_entity_ids)
            end
          end
        end        
      end
    end
  end
end


# Board Member - sat@gmail.com(test)

# Policy Maker - user.one@motc.qa(testuser1)

# Test Manager - sai.k@softpathinfotech.com(sai1234)
# Test Manager - naveen.m@softpathinfotech.com(naveen1234)

# Entity user - yashila@softpathinfotech.com(yashila1234) ----- HMC- Website

# Entity User - sireesha@softpathinfotech.com(sireesha1234) ---- ADLSA

# Test User -  sandeep.k@softpathinfotech.com(sandeep1234) ---- ADLSA, HMC-Website

