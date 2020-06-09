module SequelPlugin
  module DefaultJson
    module InstanceMethods
      def to_pos
        as_json
      end
    end
  end
end