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
      # db_url = "postgres://fethuvddimttsx:98b059a48ec005e01720de96f8b24dafeb8172da7a53d47b21670d30daa36ca6@ec2-52-200-119-0.compute-1.amazonaws.com:5432/d3m8o8hvjchi1d"
      # db_url = "postgres://exbkkjhk:teWF4qtJwyLZMXLm0CDM1eiYfNC-xr_T@satao.db.elephantsql.com:5432/exbkkjhk"
      db_url = "postgres://lnhtywgf:qfdIK2eJVhJlES3jAsyU4wZAxx1ESzfi@balarama.db.elephantsql.com:5432/lnhtywgf"
      @db = Sequel.connect(db_url, logger: Logger.new(STDOUT), max_connections: 4, after_connect: Proc.new{puts "************ Connected ************ "})
      require_blob('lib/**/*.rb')
      setup_sequel!
      App.require_blob('helpers/*.rb')
      require_blob('models/*.rb')
      require_blob('models/**/*.rb')
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
      Sequel::Model.plugin :force_encoding, 'UTF-8'
      Sequel::Model.plugin(::SequelPlugin::SaveUserId)
      Sequel::Model.plugin(::SequelPlugin::JsonValuesValidations)
      Sequel::Model.plugin(::SequelPlugin::JsonValueTypecast)
      Sequel::Model.plugin(::SequelPlugin::DefaultJson)
      Sequel::Model.plugin :nested_attributes
      Sequel::Model.plugin :dirty
      Sequel::Model.plugin :json_serializer
      Sequel::Model.raise_on_save_failure = false
      Sequel.extension :core_extensions
      Sequel.extension :named_timezones
      Sequel.extension :pg_json_ops
      Sequel.extension :pg_array_ops
      db.extension :pg_json, :pg_array, :pg_enum
      db.wrap_json_primitives = true
      db.typecast_json_strings = true
    end
  end

  module Models
    module Compliance; end
  end
  module Services
    module Compliance; end
    module Formulation; end
  end
  module Helpers; end
  module Router; end
end

