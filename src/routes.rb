
class App::Routes < Roda
  include App::Router::AllPlugins
  plugin :not_found do
    { status: 'error', data: 'Not Found' }
  end

  def do_crud(klass, r, only='CRUDL', opts = {})
    r.post { klass[r, opts].create } if only.include?('C')
    r.get(Integer) {|id| klass[r, opts.merge(id: id)].get} if only.include?('R')
    r.get { klass[r, opts].list } if only.include?('L')
    r.put(Integer) {|id| klass[r, opts.merge(id: id)].update } if only.include?('U')
    r.delete(Integer) {|id| klass[r, opts.merge(id: id)].delete } if only.include?('D')
  end

  route do |r|

    r.public

    r.root do
      r.redirect '/index.html' 
    end

    r.on 'api' do
      r.response['Content-Type'] = 'application/json'
      r.post('login') { Session[r].login }

      auth_required!

      r.on 'compliance' do
        r.on 'projects' do
          klass = Compliance::Projects
          r.on Integer, 'add', String, Integer do |id, name, obj_id|
            opt = {id: id, name: name, obj_id: obj_id }
            r.put { klass[r, opt].add_obj}
          end
  
          r.on Integer, 'remove', String, Integer do |id, name, obj_id|
            opt = {id: id, name: name, obj_id: obj_id }
            r.put { klass[r, opt].remove_obj}
          end
          do_crud(klass, r, 'CRUL')
        end


        r.on Integer do |project_id|
          opt = { project_id: project_id }
          r.on 'stake-holders' do
            klass = Compliance::StakeHolders
            do_crud(klass, r, 'CRUL', opt)
          end
        end
      end

      r.on 'policy-sections', Integer do |id|
        opt = { id: id}
        klass = Formulation::PolicySections
        r.on 'add', String, Integer do |name, obj_id|
          opt.merge!(name: name, obj_id: obj_id)
          r.put { klass[r, opt].add_obj}
        end

        r.on 'remove', String, Integer do |name, obj_id|
          opt.merge!(name: name, obj_id: obj_id)
          r.put { klass[r, opt].remove_obj}
        end
      end

      r.on 'objects' do
        r.on Integer, 'subobjects' do |object_id|
          klass = Subobjects
          r.get { klass[r, { object_id: object_id }].list }
        end
        klass = Objects
        r.get { klass[r].list }
      end

      r.on 'subobjects' do
        r.on Integer, 'questions' do |subobject_id|
          klass = ObjectQuestions
          r.get { klass[r, subobject_id: subobject_id].list }
        end
      end

      r.on 'object-questions' do
        do_crud(ObjectQuestions, r, 'CRUD')
      end

      r.on 'beneficiaries' do
        r.on Integer, 'profiles' do |beneficiary_id|
          klass = BeneficiaryProfiles
          r.get { klass[r, { beneficiary_id: beneficiary_id }].list }
        end
        klass = Beneficiaries
        r.get { klass[r].list }
      end

      r.on 'beneficiary_profiles' do
        r.on Integer, 'details' do |beneficiary_profile_id|
          klass = ProfileDetails
          r.get { klass[r, beneficiary_profile_id: beneficiary_profile_id ].list }
        end
      end

      r.on 'formulation' do
        r.on 'metadata' do
          do_crud(Formulation::Metadata, r, 'CRUL')
        end

        r.on Integer do |policy_id|
          opt = { id: policy_id }
          klass = Formulation::Metadata

          r.on 'add_beneficiary', Integer do |beneficiary_id|
            opt[:beneficiary_id] = beneficiary_id
            r.put { klass[r, opt].add_beneficiary}
          end
          r.on 'remove_beneficiary', Integer do |beneficiary_id|
            opt[:beneficiary_id] = beneficiary_id
            r.put { klass[r, opt].remove_beneficiary}
          end  
          
          r.on 'add_beneficiary_profile', Integer do |beneficiary_profile_id|
            opt[:beneficiary_profile_id] = beneficiary_profile_id
            r.put { klass[r, opt].add_beneficiary_profile}
          end  
          r.on 'remove_beneficiary_profile', Integer do |beneficiary_profile_id|
            opt[:beneficiary_profile_id] = beneficiary_profile_id
            r.put { klass[r, opt].remove_beneficiary_profile}
          end  
          
          r.on 'add_profile_detail', Integer do |profile_detail_id|
            opt[:profile_detail_id] = profile_detail_id
            r.put { klass[r, opt].add_profile_detail}
          end

          r.on 'remove_profile_detail', Integer do |profile_detail_id|
            opt[:profile_detail_id] = profile_detail_id
            r.put { klass[r, opt].remove_profile_detail}
          end

          r.on 'add', String, Integer do |name, obj_id|
            opt.merge!(name: name, obj_id: obj_id)
            r.put { klass[r, opt].add_obj}
          end

          r.on 'remove', String, Integer do |name, obj_id|
            opt.merge!(name: name, obj_id: obj_id)
            r.put { klass[r, opt].remove_obj}
          end

          r.on 'bill-decree' do
            klass = Formulation::BillDecrees
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end

          # Context

          r.on 'context' do
            klass = Formulation::Context
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end

          r.on 'risk' do
            klass = Formulation::Risk
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end

          r.on 'outcomes' do
            klass = Formulation::Outcomes
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end          

          r.on 'impact-areas' do
            klass = Formulation::ImpactAreas
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end
          
          r.on 'op/stake-holders' do
            klass = Formulation::StakeHolders
            opts = {policy_id: policy_id, type: 'op'}
            r.get { klass[r, opts].list }
            do_crud(klass, r, 'CU', opts)
          end

          r.on 'sp/stake-holders' do
            klass = Formulation::StakeHolders
            opts = {policy_id: policy_id, type: 'sp'}
            r.get { klass[r, opts].list }
            do_crud(klass, r, 'CU', opts)
          end

          r.on 'policy-queues' do
            klass = Formulation::PolicyQueues
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end
          r.on 'policy-tickets' do
            klass = Formulation::PolicyTickets
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end

          r.on 'policy-sections' do
            klass = Formulation::PolicySections
            do_crud(klass, r, 'CUR')
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end
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
App.require_blob('services/formulation/*.rb')
App.require_blob('helpers/*.rb')


App::Routes.send(:include, App::Services)
# App::Routes.send(:include, App::Services)