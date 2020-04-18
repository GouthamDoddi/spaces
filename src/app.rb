module App
  class<<self
    attr_reader :db
    def development?
      env == 'development'
    end

    def logger
      @logger ||= Logger.new(STDOUT)
    end

    def env
      @env ||= ENV['RACK_ENV'] || 'development'
    end

    def root
      @root ||= File.expand_path(File.dirname(__FILE__) + '/../')
    end

    def require_blob(blb)
      Dir[File.join(root, 'src', blb)].each {|f| require f}
    end

    def load!
      db_url = "postgres://fethuvddimttsx:98b059a48ec005e01720de96f8b24dafeb8172da7a53d47b21670d30daa36ca6@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d3m8o8hvjchi1d"
      @db = Sequel.connect(db_url, logger: Logger.new(STDOUT))
      require_blob('lib/**/*.rb')
      setup_sequel!
      require_blob('models/*.rb')
      require_relative 'routes'

    end

    def cu
      App::Helpers::CurrentUser
    end

    def generate_id
      Time.now.utc.strftime("%Y%m%d%k%M%S%L%N").to_i.to_s(36)
    end

    def setup_sequel!
      Sequel::Model.plugin :validation_helpers
      Sequel::Model.plugin(::SequelPlugin::SaveUserId)
      Sequel::Model.plugin(::SequelPlugin::JsonValuesValidations)
      Sequel::Model.plugin(::SequelPlugin::JsonValueTypecast)
      Sequel::Model.plugin :nested_attributes
      Sequel::Model.plugin :dirty
      Sequel::Model.plugin :json_serializer
      Sequel::Model.raise_on_save_failure = false
      Sequel.extension :core_extensions
      Sequel.extension :named_timezones
      Sequel.extension :pg_json_ops
      db.extension :pg_json, :pg_array
      db.wrap_json_primitives = true
      db.typecast_json_strings = true
    end
  end

  module Models; end
  module Services; end
  module Helpers; end
  module Router; end
end

