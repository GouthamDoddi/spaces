
class App::Services::Base
  attr_reader :request

  include App::Models
  include App::Helpers

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
    @current_user ||= App::Helpers::CurrentUser.decoded_token
  end

  def return_errors!(errors, code=400)
    request.halt(code, { status: 'error', data: errors })
  end

  def data_for(fn)
    allowed = a_flds[fn]
    keys = allowed[:flds].keys || []
    data = params.slice(*keys)
    allowed[:sub_flds].each do |key|
      data[key] = data[key].map {|d| d.slice(*allowed[:flds][key])}
    end

    data
    # auth_based_fields[current_user]
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

  def save(obj, &block)
    if obj.save
      block_given? ? yield(obj) : return_success(obj.to_pos)
    else
      return_errors!(obj.errors, 400)
    end
  rescue => e
    App.logger.error(e.message)
    App.logger.error(e.backtrace)
    return_errors!(e.message, 400)
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
  def rp; request.params; end


  # Basic Operations

  def list
    return_success(model.order(Sequel.desc(:created_at)).all.map(&:to_pos))
  end

  def get
    return_success(item.to_pos)
  end

  def create
    obj = model.new(data_for(:save))
    save(obj)
  end

  def update(data=nil)
    data ||= data_for(:save)
    item.set_fields(data, data.keys)
    save(item)
  end

  def delete
    res = item.delete
    res ? return_success(res.to_pos) : return_errors!('Unable to delete')
  rescue => e
    App.logger.error(e.message)
    App.logger.error(e.backtrace)
    return_errors!(e.message, 400)
  end

  def remove
    item.active = false
    save(item)
  end

  def item(id=rp[:id])
    @item ||= begin
      model[id] || return_errors!("No #{model.class} found with id: #{id}", 404)
    end
  end

  def add_obj
    name = r.params[:name]
    obj_id = r.params[:obj_id]
    fld = "#{name}_ids"
    
    obj_val = item.send(fld)

    if(obj_val)
      obj_val << obj_id
      obj_val.uniq!
    else
      item.send("#{fld}=", [obj_id])
    end
    save(item)
  end

  def remove_obj
    name = r.params[:name]
    obj_id = r.params[:obj_id]
    fld = "#{name}_ids"
    obj_val = item.send(fld)
    if(obj_val)
      item.send(fld).delete(obj_id)
    end
    save(item)
  end

  private

  def a_flds; self.class.allowed_fields; end

  def self.allowed_fields
    @allowed_fields ||= begin
      fields.with_indifferent_access.reduce({}) do |h, (action, data)|
        puts "action: #{action}"
        h.merge!(action => build_allowed_fields(data))
      end
    end.with_indifferent_access
  end

  def self.build_allowed_fields(schema, res={flds: {},  sub_flds: []})
    schema.each do |e|
      if e.is_a?(String) || e.is_a?(Symbol)
        res[:flds][e] = {}
      elsif e.is_a?(Hash)
        key, value = e.keys[0], e.values[0]
        if value.is_a?(Array)
          build_allowed_fields(value, res)
          res[:sub_flds] << key
        elsif value.is_a?(Hash)
          res[:flds].merge!(e)
        end
      end
    end
    res
  end
end