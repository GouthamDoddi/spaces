class App::Services::MasterData < App::Services::Base

  def model; resources[rp[:resource]]; end
  
  def get_data
    except = (rp[:except] || '').split(',')
    if model
      data = 
        model[:m].exclude(except).select(*model[:flds]).all.reduce({}){|h,o|
          h.merge!(o.send(model[:pkey]) => o.to_pos)
        }
      return_success(data)
    else
      return_errors!("Invalid resource", 404)
    end
  end


  def resources
    self.class.resources
  end

  def self.resources
    @resources ||= {
      users: {m: User, flds: [:id, :email], pkey: 'id'}
  }.with_indifferent_access
  end
  
end