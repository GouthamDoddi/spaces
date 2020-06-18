class App::Services::Compliance::Projects < App::Services::Base

  include Compliance

  def model; Project; end

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
        :name, :sponsor, :description, 
        :owner, :type_id, :start_date, :end_date,
      ]
    }
  end
end