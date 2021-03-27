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

  def pc_nc_parameters
    recs = App::Models::Compliance::RecordParameter.eager(:section, :project, :parameter).exclude(user_compliance_type: 1).all
    csv_string = CSV.generate do |csv|
      csv << ["Parameter ID", "Project Id", "Project Name", "Section ID", "Section Name", "type", "Parameter Name"]
      recs.each do |o|
        csv << [o.id, o.project_id, o.project&.name, o.section&.id, o.section&.name, o.user_compliance_type == 2 ? 'PC' : 'NC', o.parameter&.name]
      end
    end

    return csv_string
  end

  def upload_test_gates
    csv = CSV.new(File.read("/Users/pasupunuri/Downloads/fileg.csv"))
    data = []
    csv.each_with_index do |row, i|
      next if i == 0
      next if row[0].blank?
      test_method = row[-2] ? App::Models::AttributeParameter::TestMethods.index(row[-2]) + 1 : nil
      quality_gates = row[-1].split(',').map{App::Models::AttributeParameter::Gates.index(_1.strip) + 1}
      data.push({ id: row[0].to_i, test_method: test_method , quality_gates: quality_gates})
    end

    data.each{|r| o = App::Models::AttributeParameter[r[:id]]; o.test_method = r[:test_method]; o.quality_gates = r[:quality_gates]; o.save}

  end

  def self.fields
    {
    }
  end
end