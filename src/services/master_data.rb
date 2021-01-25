class App::Services::MasterData < App::Services::Base

  def model; resources[rp[:resource]]; end
  
  def get_data
    except = (rp[:except] || '').split(',')
    if model
      return_success(build_data(model, except))
    else
      return_errors!("Invalid resource", 404)
    end
  end

  def get_multi
    res = (rp[:list] || '').split('-')
    data = (res.present? ? resources.keys & res : resources.keys).reduce({}) do |h, o| 
      h.merge!(o => build_data(resources[o]))
    end
    return_success(data)
  end

  def build_data(modl, except=[])
    label = modl[:label]
    data = 
      modl[:m].exclude(except).select(*modl[:flds]).all.reduce({}){|h,o|
        h.merge!(o.send(modl[:pkey]) => o.to_pos.merge!(
          label: label.is_a?(Symbol) ? o.send(label) : label.call(o),
          value: o.send(modl[:pkey])
        ))
      }
  end


  def resources
    self.class.resources
  end

  def self.resources
    @resources ||= {
      users: {m: User, flds: [:id, :email, :first_name, :last_name], pkey: 'id', label: Proc.new{|o| "#{o.first_name} #{o.last_name}"} },
      entities: {m: Entity, flds: [:id, :name, :short_name], pkey: 'id', label: :short_name},
    }.with_indifferent_access
  end
  
end