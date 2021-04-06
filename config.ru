require 'bundler'
Rack::Utils # Patch
require './src/app'

Bundler.require(:default, App.env)

use Rack::Cors do

  allow do
    origins '*'
    resource '*', :headers => :any, :methods => :any
  end
end

App.load!

run App::Routes

if App.development?
  Listen.to(File.expand_path(File.dirname(__FILE__)), only: %r{.rb$}) do |added, modified, removed|
    App.logger.info("Reloading: #{added}")
    added.each do |f|
      # App.send(:remove_const, :Routes) if f.include?('routes.rb')
      load(f)
    end
  end.start
end
