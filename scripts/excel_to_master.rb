d = 
"Strategic 
Tactical 
Operational 
"

items = d.lines.map(&:chomp)

data = items.sort.each_with_index.reduce({}) do |a, (s, i)| 
  a.merge!((i + 1) => {value: i+1, label: s})
end.as_json

pp data