require 'csv'

class Questions

  def fti(key)
    {"portal" => 1, "mobile" => 2, "eservices" => 3}[key]
  end


  def load
    dir = File.dirname(__FILE__)
    arr =  CSV.read("#{dir}/questions.csv")
    App::Models::RevQuestion

    arr.each_with_index do |row, i|


      p = App::Models::RevQuestion.new(
        compliance_project_type: fti(row[1].strip.downcase),
        question: row[2].strip,
        options: row[3].split(',').map{_1.strip.downcase},
        exception_parameter_ids: row[4].present? ? row[4].split(',').map{_1.strip.to_i} : [],
        non_compliance_parameter_ids: row[5].present? ? row[5].split(',').map{_1.strip.to_i} : []
      )
      # puts p.inspect
      p.save
    end
    "test"
  end

end
