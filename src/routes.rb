
class App::Routes < Roda
  include App::Router::AllPlugins

  def do_crud(klass, r, only='CRUDL')
    r.post { klass[r].create } if only.include?('C')
    r.get(Integer) {|id| klass[r, id: id].get} if only.include?('R')
    r.get { klass[r].list } if only.include?('L')
    r.put(Integer) {|id| klass[r, id: id].update } if only.include?('U')
    r.delete(Integer) {|id| klass[r, id: id].delete } if only.include?('D')
  end

  route do |r|

    r.public

    r.root do
      "<center> WELCOME !! </center>"
    end

    r.on 'api' do
      r.response['Content-Type'] = 'application/json'
      r.post('login') { Session[r].login }

      auth_required!

      r.on 'compliance' do
        r.on 'projects' do
          do_crud(Compliance::Projects, r, 'CRUL')
        end
      end

      r.on 'notes' do
        do_crud(Notes, r)
      end
      r.on('tasks') { do_crud(Tasks, r) }

      r.on 'categories' do
        do_crud(Categories, r)
      end
    end
  end



  before do
    @time = Time.now
    App::Helpers::Before.run!(request)
    # App.logger.info(request.env)
  end

  after do |res|
    rtype = request.request_method
    App.logger.info("→ [#{Time.now - @time} seconds] - [#{rtype}]#{request.path}")
  end

  def auth_required!
    unless App.cu.valid?
      request.halt(401, {'Content-Type' => 'application/json'}, 'Unauthorized!')
    end
  end

end

App.require_blob('services/base.rb')
App.require_blob('services/*.rb')
App.require_blob('services/compliance/*.rb')
App.require_blob('helpers/*.rb')


App::Routes.send(:include, App::Services)
# App::Routes.send(:include, App::Services)