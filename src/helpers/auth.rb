module App::Helpers::Auth

  def self.included(klass)
    klass.class_eval do
      def auth_required!(*roles)
        unless App.cu.valid?
          r.halt(401, 'Unauthorized!')
        end

        if roles.length > 0  && !roles.include?(App.cu.role)
          r.halt(401, 'Unauthorized!')
        end
      end
    end
  end
end