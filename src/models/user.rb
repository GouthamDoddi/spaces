class App::Models::User < Sequel::Model
  include BCrypt

  # one_to_many :created_policies, class: 'App::Models::Policy', key: :created_by

  def roles
    App::Models::Role.where(id: all_roles)
  end

  def created_policy_ids
    App::Models::Policy.where(created_by: id).select_map(:id)
  end

  def created_project_ids
    App::Models::Compliance::Project.where(created_by: id).select_map(:id)
  end

  def roles_by_id
    @roles_by_id ||= roles.reduce({}){|h, role| h.merge!(role.id => role)}
  end

  # many_to_one :roles do |ds|
  #   ds.where(id: current_role_ids)
  # end

  # Steering commitee
  # Admin

  # def role_info
  #   @role_info ||= {
  #     0: 'Admin',
  #     1: 'Steering Committee',
  #     2: 'Executive Committee',
  #     3: 'Operating COmmittee',
  #     4: 'Ops Staff',
  #     5: 'Support Staff',
  #     6: 'Beneficiary'
  #   }
  # end

  # def static_assets
  ROLES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
  ROLE_MAPPER = ['Admin', 'Steering Committee', 'Executive Committee', 'Operating Committee', 'Ops Staff', 
    'Support Staff', 'Beneficiary', 'Entity Admin',
    'Entity Manager', 'Tester', 'Consultant', 'Jawda Tester', 'Jawda Test Manager', 'Jawda Board Member', 'Jawda Policies Manager', 'Jawda Communications Manager']


  def current_role_ids
    (authorization['projects'].values + authorization['policies'].values + [role]).uniq
  end

  def before_create
    self.authorization = { policies: {}, projects: {} }
  end

  def validate
    super
    validates_presence [:first_name, :email]
    validates_unique(:email){|ds| ds.where(:active)}
    # validates_includes ROLES, :role
  end

  def password
    @password ||= Password.new(encoded_password)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.encoded_password = @password
  end

  def name
    "#{first_name} #{last_name}"
  end

  def name=(n)
    arr = n.split(" ")
    if(arr.length > 1)
      self.last_name = arr.pop()
      self.first_name = arr.join(" ")
    else
      self.first_name = n
    end
  end

  def role_name
    ROLE_MAPPER[all_roles[0]]; 
  end

  def basic_info
    data = as_json(only: [:id, :email, :first_name, :last_name, :role])
    data[:role_name] = role_name
    data
  end

  def default_policies
    (role == 0 || roles_by_id[role]&.has_action?('create_policy')) ? 
      created_policy_ids.reduce({}){|h, pid| h.merge!( pid => {name: 'Creator', permissions: {formulation: {all: true}} })} : {}
  end

  def default_projects
    (role == 0 || roles_by_id[role]&.has_action?('create_project')) ? 
      created_project_ids.reduce({}){|h, pid| h.merge!( pid => {name: 'Creator', permissions: {compliance: {all: true}} })} : {}
  end

  def auth_data
    @auth_data ||= begin
      rl = all_roles[0]
      data = -> (key) { 
        authorization[key].reduce({}) {|h, (i, r)|
        h.merge(i => roles_by_id[r]&.values&.slice(:name, :permissions, :id))} 
      }
      { policies: data.('policies').merge!(default_policies), projects: data.('projects').merge!(default_projects), 
        self: (rl > 0 ? roles_by_id[rl]&.values&.slice(:name, :permissions) : {name: 'Super Admin', permissions: {all: true} })  }

    end
  end

  def add_role(type, type_id, role_id)
    authorization[type][type_id] = role_id
  end

  def set_entity_id(eid)
    self.entity_ids ||= []
    self.entity_ids << eid
    self.entity_ids.uniq!
    self.entity_ids
  end

  # Entities

  def set_entity(eid, erole)
    self.auth ||= {}

    self.auth['entities'] ||= []
    self.auth['entities'].push({'eid' => eid, 'role' => erole.blank? ? 9 : erole.to_i})
    self.auth['entities'].uniq!
  end 

  def to_pos
    resp = as_json.except('encoded_password').merge!(has_passowrd: encoded_password&.length)
    entity_roles = (auth || {})['entities']&.reduce({}) {|h, e| h.merge!(e['eid'] => e['role'].to_i)} || []
    resp.merge!(entity_roles: entity_roles)
  end

  def all_roles
    @all_roles ||= [role, *((auth || {})['entities'] || []).map{_1['role']}].compact.uniq
  end

  def auth_entity_ids
    (auth['entities'] || []).map{_1['eid']}
  end

  def reset_password_link
    "http://172.16.169.196/#/set-password/#{temp_token}"
  end

  def self.create_test_users
    d = [{:first_name=>"Bachir", :last_name=>"El Charif", :email=>"bachir.c@softpathinfotech.com", :role=>0}, {:first_name=>"Yashila", :last_name=>"Araveti", :email=>"yashila@softpathinfotech.com", :role=>11}, {:first_name=>"Sandeep", :last_name=>"Kondam", :email=>"sandeep.k@softpathinfotech.com", :role=>11}, {:first_name=>"Venkata Krishna", :last_name=>"Macherla", :email=>"venkata.krishna@softpathinfotech.com", :role=>11}, {:first_name=>"Naveen Kumar", :last_name=>"Miriyala", :email=>"naveen.m@softpathinfotech.com", :role=>0}, {:first_name=>"Sai", :last_name=>"K", :email=>"sai.k@softpathinfotech.com", :role=>12}, {:first_name=>"Osama", :last_name=>"Jaradat", :email=>"osama.j@softpathinfotech.com", :role=>11}, {:first_name=>"Subhum", :last_name=>"Sarkar", :email=>"subham.sarkar@gmail.com", :role=>14}, {:first_name=>"Mahesh", :last_name=>"Varikunta", :email=>"mahesh.varikunta@softpathinfotech.com", :role=>13}, {:first_name=>"Mohammad", :last_name=>"Hanan", :last_name=>"Ahmed", :email=>"hahmed@motc.gov.qa", :role=>0}, {:first_name=>"Hatem", :last_name=>"Omar", :email=>"homer@motc.gov.qa", :role=>0}, {:first_name=>"Noora", :last_name=>"Al-Mannai", :email=>"nalmannai@motc.gov.qa", :role=>15}, {:first_name=>"Hussein", :last_name=>"Bitar", :email=>"hbitar@motc.gov.qa", :role=>12}, {:first_name=>"Tariq", :last_name=>"Alakkawi", :email=>"talakkawi@motc.gov.qa", :role=>11}, {:first_name=>"Anas", :last_name=>"Mohammed", :email=>"amohammed@motc.gov.qa", :role=>11}, {:first_name=>"Mohamed", :last_name=>"Atef", :email=>"mabdelmagied@motc.gov.qa", :role=>13}, {:first_name=>"Ghada", :last_name=>"AL-Subaiei", :email=>"galsubaiei@motc.gov.qa", :role=>15}, {:first_name=>"Jassim", :last_name=>"Alsaygh", :email=>"jalsaygh@motc.gov.qa", :role=>14}, {:first_name=>"Yousuf", :last_name=>"Al-Sahlawi", :email=>"alsahlawi@motc.gov.qa", :role=>14}, {:first_name=>"Mohammed", :last_name=>"Amir", :email=>"mhabib@motc.gov.qa", :role=>14}, {:first_name=>"Mohammad", :last_name=>"Arafeh", :email=>"marafeh@motc.gov.qa", :role=>14}]
    pass = 'jawd@pas$1999'
    d.each{|o| o[:password] = pass; App::Models::User.create(o)}
  end

end