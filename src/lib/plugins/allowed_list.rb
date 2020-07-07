module SequelPlugin
  module AllowedList

    def self.apply(model)
      model.instance_eval do
        dataset_module do
          def allowed(type=:policies, key=:id)
            ids = App.cu.user_obj.auth_data[type].keys.map(&:to_i)
            where(key => ids)
          end
        end        
      end
    end
  end
end