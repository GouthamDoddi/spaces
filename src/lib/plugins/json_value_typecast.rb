module SequelPlugin
  module JsonValueTypecast
    module InstanceMethods

      def before_save
        # type_cast_json_values
        # generate_ids
        super
      end

      def generate_ids
        json_data_iterator do |col, data, i|
          data['id'] ||= App.generate_id
        end
      end

      def type_cast_json_values
        json_data_iterator do |col, data, i|
          data&.each do |k,v|
            type = json_fields.dig(col, k, :type)
            if type == 'price'
              data[k] = v.to_f
            end
          end
        end
      end


      def json_data_iterator
        json_fields.each do |col, fields|
          if self.values[col].is_a?(Sequel::Postgres::JSONBArray)
            self.values[col].each_with_index do |v, i|
              yield col, v, i
            end
          else
            yield col, self.values[col]
          end
        end
      end


      def json_fields; self.class.json_fields; end

    end
  end
end