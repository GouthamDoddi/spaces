class App::Services::Base
  attr_reader :request

  include App::Models

  # JSON_TYPE = {'Content-Type' => 'application/json'}

  def initialize(r)
    @request = r
  end

  def self.[](r, hash={})
    r.params.merge!(hash)
    new(r)
  end

  def json(r)
    r.to_json
  end

  def current_user
    @current_user ||= App::Helper::CurrentUser.get
  end

  def return_errors!(errors, code=400)
    request.halt(code, { status: 'error', data: errors })
  end

  def data_for(fn)
    params.slice(*(self.class.fields[fn] || []))
  end

  def authorize!(*roles)
    # roles.include?()
    true
  end

  def return_success(data)
    { status: 'success', data: data }
  end

  def return_success!(data)
    r.halt({ status: 'success', data: data })
  end

  def save(obj)
    if obj.save
      return_success(obj.to_pos)
    else
      return_errors!(obj.errors, 400)
    end
  end

  def check_presence!(*flds)
    empty = flds.select do |f|
      params&.dig(*f).blank?
    end

    if empty.present?
      errors = empty.reduce({}) do |h, f|
        key = f.is_a?(Array) ? f.join('.') : f
        h.merge!(key => "Can't be blank")
      end
      return_errors!(errors, 400)
    end
  end

  def params
    @params ||= r.params.with_indifferent_access[:data]
  end

  def r; request; end
end