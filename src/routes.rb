
class App::Routes < Roda
  include App::Router::AllPlugins

  def do_crud(klass, r)
    r.get(Integer) {|id| klass[e, id: id].get}
    r.get { klass[r].list }
    r.put(Integer) {|id| klass[r, id: id].update }
    r.delete(Integer) {|id| klass[r, id: id].delete }
    r.post { klass[r].create }
  end

  route do |r|

    r.public

    r.root do
      "<center> WELCOME !! </center>"
    end

    r.on 'api' do
      r.response['Content-Type'] = 'application/json'
      r.post('login') { Session[r].login }

      # auth_required!

      r.get('user-info') { Users[r].basic_info }


      r.on 'categories' do
        do_crud(Categories, r)
        # r.get(Integer) { |id| Kitchens[r, id: id].get }
        # r.get { Kitchens[r].list }
        # r.put(Integer) {|id| Kitchens[r, id: id].update }
        # r.delete(Integer) {|id| Kitchens[r, id: id].delete }
        # r.post { Kitchens[r].create }
      end
    end
  end



  before do
    @time = Time.now
    App::Helpers::Before.run!(request)
    # App.logger.info(request.env)
  end

  after do |res|
    App.logger.info("→ [#{Time.now - @time} seconds] - #{request.path}")
  end

  def auth_required!
    unless App.cu.valid?
      request.halt(401, {'Content-Type' => 'application/json'}, 'Unauthorized!')
    end
  end

end

App.require_blob('services/base.rb')
App.require_blob('services/*.rb')
App.require_blob('helpers/*.rb')


App::Routes.send(:include, App::Services)
# App::Routes.send(:include, App::Services)