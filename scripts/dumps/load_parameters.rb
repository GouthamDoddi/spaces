require 'csv'

class Parameters

  def fti(row)
    if(row[14]&.downcase&.include?('y'))
      1
    elsif(row[15]&.downcase&.include?('y'))
      2
    else
      3
    end
  end

  def stg(row)
    resp = []
    if(row[9]&.downcase&.include?('y'))
      resp << 1
    end
    if(row[10]&.downcase&.include?('y')) 
      resp << 2
    end
    if(row[11]&.downcase&.include?('y')) 
      resp << 3
    end
    if(row[12]&.downcase&.include?('y')) 
      resp << 4
    end
    if(row[13]&.downcase&.include?('y')) 
      resp << 5
    end
    resp
  end

  def load
    dir = File.dirname(__FILE__)
    arr =  CSV.read("#{dir}/parameters.csv")
    App::Models::RevParameter.unrestrict_primary_key

    arr.each_with_index do |row, i|
      next if i == 0 || row[2]&.strip.blank?

      p = App::Models::RevParameter.new(
        id: row[0].strip.to_i,
        section_id: row[1].split('-').last.strip.to_i,
        code: row[1].split('-').first.strip,
        section_name: row[2],
        attribute_id: row[3].split('.').last.strip.to_i,
        attribute_name: row[4],
        order: row[5].split('.').last.strip.to_i,
        parameter_name: row[6], mandate: row[7],
        description: row[8],
        framework_type_id: fti(row),
        stage_gates: stg(row)
      )
      # puts p.inspect
      p.save
    end
    "test"
  end

end



# Integer :framework_type_id
# String :paramter_name
# String :mandate, size: 5
# column :stage_gates, 'varchar(100)[]'
# Integer :attribute_id
# String :attribute_name
# Integer :section_id
# String :section_name
# String :section_name_ar