class App::Services::Compliance::Projects < App::Services::Base

  include Compliance

  def model; Project; end

  def list
    # return_success(model.allowed(:projects).all.map(&:to_pos))
    # : proc{|ds| ds.where(user_compliance_type: [2,3])}
    uct = [2,3]
    # byebug
    data = model.for_current_user.eager(:record_parameters).order(Sequel.desc(:created_at)).all.map do |project|
      # project.to_pos.merge!(defects: project.record_parameters.length)
      rec = project.record_parameters
      total = rec.length
      
      fixed = rec.sum(0){|r| r.closed? ? 1 : 0}
      defects = rec.sum(0){|r| uct.include?(r.user_compliance_type) ? 1 : 0}
      progress = total == 0 ? 100 : (fixed + defects)*100/total
      
      project.to_pos.merge!(defects: defects, progress: progress, fixed: fixed)
    end
    return_success(data)
  end

  def questions
    qs = item(rp[:project_id]).possible_questions.map(&:to_pos)
    return_success(qs: qs, done: item.applied_attribute_ids.present?)
  end

  def add_applicable_attributes
    attrs = item(rp[:project_id]).applicable_attributes.all
    qs = params.select{|q, ans| ans == 'yes' || ans == 'Yes' }
    yeses = qs.keys.map(&:to_i)
    selected_attrs = attrs.filter_map do |attr|
      if (item.possible_questions_for(attr) - yeses).blank?
        attr.id
      end
    end
    item.applied_attribute_ids = selected_attrs
    save(item) { return_success({done: item.applied_attribute_ids.present?}) }
  end

  def report_cards
    resp = 
      model.eager(applicable_sections: [:policy_section_attributes, :parameters]).all.map do |p|
        {
          title: p.name,
          section_count: p.applicable_sections.count,
          attribute_count: p.applicable_sections.sum{|a| a.policy_section_attributes.count},
          parameter_count: p.applicable_sections.sum{|a| a.parameters.count},
          due_date: p.end_date,
          score: (1..40).to_a.sample.to_s + '%',
          tickets: 'Created'
        }
      end
      return_success(resp)
  end


  def self.fields
    {
      save: [
        :name, :sponsor, :description, :category_id,
        :owner, :type_id, :start_date, :end_date, :owner_id
      ]
    }
  end
end