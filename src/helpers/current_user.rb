class App::Helpers::CurrentUser
  SECRET = "2711b090-d6e5-0137-5d4d-1c36bbed4305-2aadedb0-d6e5-0137-5d4d-1c36bbed4305"

  class<<self

    def id
      decoded_token&.[](:id)
    end

    def role
      decoded_token&.[](:role)
    end

    def valid?
      id.present?
    end

    def ip
      space[:ip]
    end

    def space
      Thread.current[:app_space]
    end

    def token
      space[:auth_token]
    end

    def decoded_token
      return nil if space[:auth_token].blank?

      space[:decoded] ||= JWT.decode(
            space[:auth_token], SECRET, true, { algorithm: 'HS256' }
          )[0].with_indifferent_access
    rescue => e
      App.logger.error(e.message)
      nil
    end

    def user_obj
      space[:user_obj] ||= App::Models::User[id]
    end

    def basic_info
      user_obj.values.slice(:email, :first_name, :last_name, :role)
    end

    def encoded_token(user)
      exp = (Time.now + 1.hour).to_i
      payload = { id: user.id, role: user.role,ip: ip, exp: exp }
      JWT.encode(payload, SECRET, 'HS256')
    end
  end


  # def get
  #   space[:user] ||= user_from_token
  # end

  # def user_from_token
  #   return nil if space[:auth_token].blank?

  #   decoded =
  # end

end