class App::Models::Entity < Sequel::Model
  one_to_many :projects, class: 'App::Models::Compliance::Project', key: :owner_id

  def validate
    super
    # validates_presence [:name, :date]
    # validates_unique :email
    # validates_includes ROLES, :role
  end


  def self.for_report(id=nil)
    ds = eager(:projects => {record_parameters: :parameter})
    id ? ds[id] : ds.all
  end

  def projects_info
    projects.map do |p|
      { name: p.name, description: p.description, score: p.score, progress: p.progress, sections: p.section_wise_compliance_count }
    end
  end

  def projects_status
    projects.reduce({completed: 0, wip: 0, not_started: 0}) do |h, p|
      if p.completed?
        h[:completed] += 1
      elsif p.wip?
        h[:wip] += 1
      elsif p.not_started?
        h[:not_started] += 1
      end
      h
    end
  end



  def section_wise_compliance
    projects.reduce({}) do |h, p|
      p.section_wise_compliance_count.each do |s|
        if h[s[:id]]
          h[s[:id]]['Fully Compliant'] += s['Fully Compliant']
          h[s[:id]]['Partially Compliant'] += s['Partially Compliant']
          h[s[:id]]['Non Compliant'] += s['Non Compliant']
        else
          h[s[:id]] = s
        end
      end
      h
    end

  end


  def self.section_wise_compliance_for_entities(entities)
    entities.reduce({}) do | h, p|
      p.section_wise_compliance.values.each do |s|
        if h[s[:id]]
          h[s[:id]]['Fully Compliant'] += s['Fully Compliant']
          h[s[:id]]['Partially Compliant'] += s['Partially Compliant']
          h[s[:id]]['Non Compliant'] += s['Non Compliant']
        else
          h[s[:id]] = s
        end
      end
      h
    end
  end
end

# e = App::Models::Entity.for_report
# e.map{|oe| oe.projects.map {|p| p.section_wise_score(true)}}