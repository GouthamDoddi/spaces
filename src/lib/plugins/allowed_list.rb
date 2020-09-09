module SequelPlugin
  module AllowedList

    def self.apply(model)
      model.instance_eval do
        dataset_module do
          def allowed(type=:policies, key=:id)
            if((type == :projects && App.cu.user_obj.role == 5 )||  App.cu.user_obj.role == 0)
              where({})
            elsif(type == :projects && App.cu.user_obj.id == 11)
              where(id: 9)
            elsif(type == :projects && App.cu.user_obj.id == 10)
              where(id: 8)
            elsif (type == :projects && (8..13).include?(App.cu.user_obj.id))
              where(created_by: (8..13).to_a)
            else
              ids = App.cu.user_obj.auth_data[type].keys.map(&:to_i)
              where(key => ids)
            end
          end
        end        
      end
    end
  end
end