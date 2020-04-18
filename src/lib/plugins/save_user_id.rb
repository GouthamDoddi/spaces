module SequelPlugin
  module SaveUserId
    module InstanceMethods
      def before_create
        self.created_by ||= App::Helpers::CurrentUser.id
        super
      end

      def before_save
        self.updated_by ||= App::Helpers::CurrentUser.id
        super
      end
    end
  end
end