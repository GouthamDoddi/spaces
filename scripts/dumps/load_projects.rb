require 'csv'

class Script

  def loadp
    dir = File.dirname(__FILE__)
    CSV.foreach("#{dir}/projects.csv") do |row|
      p = App::Models::Compliance::Project[row[1]]
      p.description = row[3]
      p.save
    end
  end

end