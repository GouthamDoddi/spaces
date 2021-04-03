require 'csv'

class Challenges

  def load
    dir = File.dirname(__FILE__)
    CSV.foreach("#{dir}/challenges.csv") do |row|
      p = App::Models::Challenge.new(entity_id: row[0], 
        project_id: row[1], section_id: row[2], attribute_id: row[3],
        record_parameter_id: row[4].split('-')[0].strip,
        type_id: row[5], description: row[6], date: Date.today - (1..6).to_a.sample.days
      )
      p.save
    end
  end

end