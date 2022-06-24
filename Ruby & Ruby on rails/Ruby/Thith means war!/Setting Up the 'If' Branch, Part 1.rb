print "type a thing"
user_input = gets.chomp
user_input.downcase!
if user_input.include? "s"
  print "contains S!"
end