module SequelPlugin
  module JsonValuesValidations
    module InstanceMethods
      def validates_json_cols
        self.class::json_fields.each do |col, fields|
          data = send(col)
          next if data.blank?
          if data.is_a?(Sequel::Postgres::JSONBArray)
            data.each_with_index {|o, i|
              validate_json_fields(path: [col, i], fields: fields, v: o )
            }
          else
            validate_json_fields(path: [col], fields: fields, v: data )
          end
        end
      end


      def validate_json_fields(hash)
        hash.delete(:fields).each do |key, val|
          val[:validations]&.each do |h|
            v = hash.dig(:v, key)
            att = {path: hash[:path] + [key], v: v}
            send("validates_#{h[:t]}", [att], (h[:opts] || {}))

            type_validation = "validates_type_#{val[:type]}"

            send(type_validation, [att], {}) if v && respond_to?(type_validation)
            # self.class::TYPE_VALIDATIONS[val[:type]]&.(att, {})
          end
        end
      end

      def validates_type_price(atts, opts)
        validates_format(/\A\d+(?:\.\d{0,2})?\z/, atts, message: 'invalid price')
      end

      def validatable_attributes(atts, opts)
        # opts = opts.with_indifferent_access unless opts.is_a?(ActiveSupport::HashWithIndifferentAccess)
        am, an, ab, m = opts.values_at(:allow_missing, :allow_nil, :allow_blank, :message)
        from_values = opts[:from] == :values

        Array(atts).each do |a|
          if a.is_a?(Hash)
            path = a[:path]
            error_key = path.join('.')
            v = a[:v]
            next if am && !values.dig(*path[0..-2])&.has_key?(path[-1])
            next if an && v.nil?
            next if ab && model.db.send(:blank_object?, v)
            if message = yield(error_key, v, m)
              errors.add(error_key, message)
            end
          else
            next if am && !values.has_key?(a)
            v = from_values ? values[a] : get_column_value(a)
            next if an && v.nil?
            next if ab && model.db.send(:blank_object?, v)
            if message = yield(a, v, m)
              errors.add(a, message)
            end
          end
        end
      end


      def validate
        super
        validates_json_cols if self.class.respond_to?(:json_fields)
      end

      # TYPE_VALIDATIONS = {
      #   'price' => -> (atts, opts) {
      #       opts.merge!(message: 'Invalid price', with: /\A\d+(?:\.\d{0,2})?\z/)
      #       validates_format(atts, opts)
      #    }
      # }
    end
  end
end