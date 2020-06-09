
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
          do_crud(Compliance::Projects, r, 'CRUL')
        end
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


          r.on 'bill-decree' do
            klass = Formulation::BillDecrees
            r.get { klass[r, policy_id: policy_id].get }
            r.put { klass[r, policy_id: policy_id].update}
            do_crud(klass, r, 'C')
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
          r.on 'objects' do
            klass = Formulation::Objects
            r.on Integer, 'sub-objects' do |object_id|
              klass = Formulation::Subobjects
              r.get { klass[r, policy_id: policy_id, object_id: object_id].list }
              do_crud(klass, r, 'CU')
            end
            do_crud(klass, r, 'CU')
            r.get { klass[r, policy_id: policy_id].list }
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