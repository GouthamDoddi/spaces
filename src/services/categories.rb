class App::Services::Categories < App::Services::Base

  def model
    if r.params[:type] == 'food'
      FoodCategory
    elsif r.params[:type] == 'grocery'
      GroceryCategory
    else
      return_errors!('Unknown Category Type', 404)
    end
  end


  def list
    return_success(model.all.map(&:to_pos))
  end

  def get
    return_success(item.to_pos)
  end

  def item
    @item ||= begin
      id = r.params[:id]
      model[id] || return_errors!("No Category found with id: {id}", 404)
    end
  end

  def create
    tag = model.new(data_for(:create))
    save(tag)
  end

  def update
    data = data_for(:create)
    item.set_fields(data, data.keys)
    save(item)
  end

  def self.fields
    {
      create: %w[name parent_id main description]
    }
  end
end