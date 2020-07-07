class App::Models::Role < Sequel::Model

  def actions
    permissions['actions'] || []
  end

  def has_action?(name)
    actions.include?(name)
  end
end