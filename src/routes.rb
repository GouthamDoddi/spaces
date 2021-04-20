
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

  def add_remove(klass, r, opts={})
    r.on 'add', String, Integer do |name, obj_id|
      opts.merge!(name: name, obj_id: obj_id)
      r.put { klass[r, opts].add_obj}
    end

    r.on 'remove', String, Integer do |name, obj_id|
      opts.merge!(name: name, obj_id: obj_id)
      r.put { klass[r, opts].remove_obj}
    end
  end

  route do |r|

    r.public

    r.root do
      r.redirect '/index.html' 
    end



    r.on 'api' do
      
      r.on 'download/parameters' do
        r.get do 
          Utils[r, {}].parameters
        end
      end
      r.on 'download/pc-nc-parameters' do
        r.get do
          Utils[r, {}].pc_nc_parameters
        end
      end

      r.response['Content-Type'] = 'application/json'
      r.post('login') { Session[r].login }

      r.on 'assets', 'images', String, Integer do |source, source_id|
        opts = { id: source_id, source: source }
        r.delete {|id| ImageAssets[r, opts].delete }
        do_crud(ImageAssets, r, 'CL', opts)
      end
      
      # r.on 'master-data' do
      #   r.get('list', [String, true]) do |list|
      #     MasterData[r, {list: list}].get_multi
      #   end

      #   r.get(String) do |resource|
      #     MasterData[r, {resource: resource}].get_data
      #   end
      # end

      r.post('forgot-password-email') { Users[r].reset_password }
      r.post('update_password') { Users[r].update_password }

      r.on('reports') {
        r.get('entities') {Reports[r, {}].entities}
        r.get('all-projects') {Reports[r, {}].all_projects}
        r.get(Integer, 'projects') { |entity_id| Reports[r, {entity_id: entity_id}].projects}

        r.get('state') { Reports[r, {}].state_report }
        r.get('entity', Integer) { |id| Reports[r, {entity_id: id}].entity_report }
        r.get('project', Integer) { |id| Reports[r, {project_id: id}].project_report }
        r.get(Integer, 'db_project', Integer) { |entity_id, project_id| Reports[r, {project_id: project_id, entity_id: entity_id}].db_project_report }
        r.get(Integer, 'db_entity') { |entity_id| Reports[r, {entity_id: entity_id}].db_entity_report }
        r.get('db_state') { Reports[r, {}].db_state_report }
        r.get('challenges', [Integer, true], [Integer, true]) {|entity_id, project_id| Reports[r, { entity_id: entity_id, project_id: project_id}].challenges}
      }
      auth_required!

      # r.on('reports') {
      #   r.get('entities') {Reports[r, {}].entities}
      #   r.get(Integer, 'projects') { |entity_id| Reports[r, {entity_id: entity_id}].projects}

      #   r.get('state') { Reports[r, {}].state_report }
      #   r.get('entity', Integer) { |id| Reports[r, {entity_id: id}].entity_report }
      #   r.get('project', Integer) { |id| Reports[r, {project_id: id}].project_report }
      # }



      r.on 'reference-data' do
        r.get('rev-projects', [Integer, true], 'compliance-projects') do |project_id|
          ReferenceData[r, {project_id: project_id}].compliance_projects
        end
        r.get('rev-projects', [Integer, true], 'compliance-projects-eservices') do |project_id|
          ReferenceData[r, {project_id: project_id}].compliance_projects_eservices
        end

        r.get('sections') do 
          ReferenceData[r].sections
        end

        r.get('sections', Integer, 'attributes') do |section_id|
          ReferenceData[r, {section_id: section_id}].attributes
        end

        r.get('attributes', Integer, 'parameters') do |attribute_id|
          ReferenceData[r, {attribute_id: attribute_id}].parameters
        end        
      end

      r.on([Integer, true], 'rev-projects') do  |entity_id|

        # r.on('e-services') do 
        #   do_crud(ProjectEservices, r, 'CRUDL',  {project_id: project_id})
        # end
        r.on Integer, 'users' do |project_id|
          opts = {project_id: project_id}
          do_crud(EntityUsers,r, 'CRUDL', opts.merge!(parent: 'project'))
        end

        r.on Integer, 'questions' do |project_id|
          opts = {project_id: project_id}
          do_crud(RevQuestions, r, 'CRUDL', opts)
        end

        r.on Integer, 'cases' do |project_id|
          opts = {project_id: project_id}
          do_crud(RevCases, r, 'CRUDL', opts)
        end

        r.on Integer, 'compl-projects-report' do |project_id|
          opts = {project_id: project_id}
          RevComplianceRecords[r, opts].report
        end

        r.on Integer, 'compl-records' do |project_id|
          opts = {project_id: project_id}
          do_crud(RevComplianceRecords, r, 'CRUDL', opts)
        end
        
        do_crud(RevProjects, r, 'CRUDL', {entity_id: entity_id} )
        
      end

      r.on(Integer, 'rev-compl-projects') do |project_id|
        do_crud(RevComplianceProjects, r, 'L', {project_id: project_id})
      end

      r.get('rev-compl-projects', Integer, 'sections-report') do |compl_project_id|
        RevComplianceRecords[r, {compl_project_id: compl_project_id}].section_report
      end

      r.get('rev-compl-projects', Integer, 'section', Integer, 'attribute-report') do |compl_project_id, section_id|
        opts = {compl_project_id: compl_project_id, section_id: sections_id}
        RevComplianceRecords[r, opts].attribute_report
      end

      r.get('rev-compl-projects', Integer, 'attribute', Integer, 'parameters') do |compl_project_id, attribute_id|
        opts = {compl_project_id: compl_project_id, attribute_id: attribute_id}
        RevComplianceRecords[r, opts].parameters
      end

      r.get('rev-compl-projects', Integer, 'parameter', Integer, 'variations') do |compl_project_id, parameter_id|
        opts = {compl_project_id: compl_project_id, parameter_id: parameter_id}
        RevComplianceRecords[r, opts].variations
      end



      r.on('rev-compliance', Integer, 'questions') do |project_id|
        r.get { RevComplianceQuestions[r, {id: project_id}].list }
        r.put(Integer) {|id| RevComplianceQuestions[r, {id: project_id}].update }
      end

      r.on('rev-compl-projects') do
        do_crud(RevComplianceProjects, r, 'CRUD', {})
      end

      # r.on('rev-projects', Integer, 'questions') do |project_id|
      #   do_crud(RevQuestions, r, 'CRUDL', {project_id: project_id})
      # end


      
      r.on('audit-logs', String, Integer) { |resource, resource_id|
        App::Models::AuditLog.where(resource: resource, resource_id: resource_id).all.as_json
      }

      r.on 'master-data' do
        r.get('list', [String, true]) do |list|
          MasterData[r, {list: list}].get_multi
        end

        r.get(String) do |resource|
          MasterData[r, {resource: resource}].get_data
        end
      end
      
      # r.on 'master-data' do
      #   r.get('list', [String, true]) do |list|
      #     MasterData[r, {list: list}].get_multi
      #   end
      #   r.get(String) do |resource|
      #     MasterData[r, {resource: resource}].get_data
      #   end
      # end

      r.on 'entities' do
        r.on Integer, 'users' do |entity_id|
          do_crud(EntityUsers,r, 'CRUDL', { entity_id: entity_id, parent: 'entity' })
        end
        
        r.on Integer, 'communication' do |entity_id|
          do_crud(EntityCommunications, r, 'CRUDL', {entity_id: entity_id})
        end

        r.on Integer, 'services' do |entity_id|
          do_crud(EntityServices, r, 'CRUDL', {entity_id: entity_id})
        end

        r.on(Integer, 'e-services') do |entity_id|
          do_crud(ProjectEservices, r, 'CRUDL',  {entity_id: entity_id})
        end

        
        do_crud(Entities, r, 'CRUDL')
        
      end

      r.on 'get-section-attr', Integer, [Integer, true], [Integer, true] do |id, attr_id, param_id|
        r.get { Formulation::SimpleSections[r, {id: id, attr_id: attr_id, param_id: param_id}].names }
      end
      r.on 'extras' do
        r.on String, Integer, String do |ref, ref_id, name|
          opts = { ref: ref, ref_id: ref_id, name: name }
          klass = Formulation::Extras
          r.get { klass[r, opts].list}
          r.post { klass[r, opts].create }
        end
        r.put(Integer) { klass[r, {id: id}].update }
        r.get(Integer) { klass[r, {id: id}].get}
      end


      r.on 'compliance' do
        r.on 'parameter', 'files', Integer do |pid|
          opts = { id: pid }
          r.delete {|id| Compliance::ParameterFiles[r, opts].delete }
          do_crud(Compliance::ParameterFiles, r, 'CL', opts)
        end
        r.on 'sections-started' do
          r.get {Compliance::Sections[r].started_sections }
        end

        r.on 'project-report' do
          r.get { Compliance::Projects[r].report_cards }
        end

        r.on 'project', Integer, 'issues' do |id|
          do_crud(ProjectIssues, r, 'CRUDL', {project_id: id})
        end

        r.on 'project', Integer, 'cases' do |id|
          Compliance::Cases[r, {project_id: id}].for_project
        end

        

        r.on Integer, 'tasks' do |project_id|
          opts = { project_id: project_id }
          r.get('for-case', Integer) {|case_id| Compliance::Tasks[r, opts.merge!(case_id: case_id)].for_case}
          do_crud(Compliance::Tasks, r, 'CRUDL', opts)
        end

        r.on 'project', Integer, 'attr', Integer, 'parameters' do |project_id, attribute_id|
          opts = { project_id: project_id, attribute_id: attribute_id }
          r.get { Compliance::Parametes[r, opts].list }
        end
        
        r.on 'section', Integer, 'attr', Integer do |section_id, attribute_id|
          opts = { section_id: section_id, attribute_id: attribute_id }

          r.on 'parameters' do
            r.put(Integer, 'approver') {|id|  Compliance::Parametes[r, opts.merge!(id: id)].approver_update }
            do_crud(Compliance::Parametes, r, 'CRUD', opts)
          end

          r.on 'cases' do
            do_crud(Compliance::Cases, r, 'CRUDL', opts)
          end
        end

        r.on Integer, 'approver-cases' do |project_id|
          r.get {Compliance::Cases[r, {project_id: project_id }].approver_cases }
        end

        r.on Integer, 'mycases' do |project_id|
          r.get {Compliance::Cases[r, {project_id: project_id }].user_cases }
        end
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

        r.on 'attributes-for-section', Integer do |section_id|
          r.get { Compliance::Sections[r, {section_id: section_id}].attributes }
        end

        r.on Integer do |project_id|
          opt = { project_id: project_id }
          
          r.on 'possible-questions' do
            klass = Compliance::Projects
            r.get { klass[r, opt].questions }
            r.post { klass[r, opt].add_applicable_attributes }
          end
          
          r.on 'plans'  do
            klass = Compliance::Plans
            do_crud(klass, r, 'CRUDL', opt)            
          end

          
          r.on 'sections' do
            klass = Compliance::Sections
            r.get('applicable') { klass[r, opt].applicable_sections }
            r.get('applicable-enhanced') { klass[r, opt].applicable_sections_enhanced }
            r.get(Integer, 'attributes') { |section_id|  klass[r, opt.merge(section_id: section_id)].applicable_attributes_enhanced }
            r.get('started') { Compliance::Sections[r, opt].started_applicable_sections }
            r.get(Integer, 'attributes-started') { |section_id|
              opt[:section_id] = section_id
              klass[r, opt].started_applicable_attributes
            }

            r.on Integer, 'questions' do |id|
              
              r.get { klass[r, opt.merge(id: id)].questions }
              r.post { klass[r, opt.merge(id: id)].applicable_questions }
            end
            do_crud(klass, r, 'RL', opt)
          end

          r.on 'stake-holders' do
            klass = Compliance::StakeHolders
            do_crud(klass, r, 'CRUL', opt)
          end

          r.on 'implementation-domains' do
            klass = Compliance::ImplementationDomains
            do_crud(klass, r, 'CRUL', opt)
          end
        end
      end

      r.on 'policy-sections', Integer do |id|
        opt = { id: id}
        klass = Formulation::SimpleSections
        add_remove(klass, r, opt)
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

        r.on 'section-contents', Integer, String do |section_id, type|
          r.get('all') { Formulation::SectionContents[r, {section_id: section_id, type: type}].all }
          do_crud(Formulation::SectionContents, r, 'CRUDL', {section_id: section_id, type: type})
        end

        r.on 'attributes', Integer, 'params' do |attr_id|
          do_crud(Formulation::AttributeParams, r, 'CRUDL', {attr_id: attr_id})
        end

        r.on Integer do |policy_id|
          opt = { id: policy_id }
          klass = Formulation::Metadata
          
          r.on 'users-with-role', Integer do |role_id|
            klass = Formulation::UserRoles
            opt[:role_id] = role_id
            r.post { klass[r, opt].create }
            r.delete { klass[r, opt].delete }
            r.get { klass[r, opt].list }
          end

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
            do_crud(klass, r, 'CUD')
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
            do_crud(klass, r, 'CUD', opts)
          end

          r.on 'sp/stake-holders' do
            klass = Formulation::StakeHolders
            opts = {policy_id: policy_id, type: 'sp'}
            r.get { klass[r, opts].list }
            do_crud(klass, r, 'CUD', opts)
          end

          r.on 'policy-queues' do
            klass = Formulation::PolicyQueues
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CUD')
          end
          r.on 'policy-tickets' do
            klass = Formulation::PolicyTickets
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CUD', {policy_id: policy_id})
          end

          r.on 'policy-op-tasks' do
            klass = Formulation::PolicyOpTasks
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CUD', {policy_id: policy_id})
          end

          r.on 'policy-viewers' do
            klass = Formulation::PolicyViewers
            r.get { klass[r, policy_id: policy_id].list }
            do_crud(klass, r, 'CU')
          end

          r.on 'policy-sections' do
            klass = Formulation::PolicySections
            opts = { policy_id: policy_id }
            r.on Integer, 'attributes' do |section_id|
              opts[:section_id] = section_id
              klass = Formulation::PolicySectionAttributes
              do_crud(klass, r, 'CRUDL', opts)
            end
            do_crud(klass, r, 'CRUDL', opts)
          end

          r.on 'simple-sections' do
            klass = Formulation::SimpleSections
            opts = { policy_id: policy_id }
            do_crud(klass, r, 'RU', opts)
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

App::Routes.send(:include, App::Services)
# App::Routes.send(:include, App::Services)