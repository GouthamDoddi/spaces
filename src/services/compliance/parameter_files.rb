class App::Services::Compliance::ParameterFiles < App::Services::Base

  def model; App::Models::Compliance::RecordParameter; end

  def list
    return_success(item.images)
  end

  def create
    item.images ||= []
    item.images += params[:files]
    save(item)
  end

  def delete
    fn = params[:file_name]
    item.images ||= []
    item.images.delete(fn)
    # item.images += params[:files]
    save(item)
  end

  
  def self.fields
    {
      create: [
        
      ]
    }
  end
end