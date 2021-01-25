require 'csv'
class App::Services::Utils < App::Services::Base

  def parameters
    r.response['Content-Type'] = 'application/csv'
    r.response['Content-Disposition'] = "attachment; filename=#{SecureRandom.uuid}.csv"
    # r.response['Attachment'] = "#{SecureRandom.uuid}.csv"
    data = App::Models::AttributeParameter.eager(policy_section_attribute: {policy_section: :policy}).all.group_by{_1.attribute_id}

    csv_string = CSV.generate do |csv|
        csv << ["Parameter ID", "Policy ID", "Policy Name", "Section ID", "Section Name", "Attribute ID", "Attribute Name", "Parameter Name", "Test Method", "Gate"]
        data.values.each do |arr|
          arr.each do |p|
            attribute = p.policy_section_attribute
            section = attribute.policy_section
            policy = section.policy
            csv << [p.id, policy.id, policy.name, section.id, section.name, attribute.id, attribute.name, p.name, '', '']
          end
          csv << []
        end
    end

    return csv_string

  end

  def self.fields
    {
    }
  end
end