class App::Services::ImageAssets < App::Services::Base


  def model
    self.class.sources[rp[:source]]
    
  end

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

  def self.sources
    @sources ||= {
      issues: ProjectIssue
  }.with_indifferent_access
  end
  
  def self.fields
    {
      create: [
        
      ]
    }
  end
end