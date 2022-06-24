print "Integer please: "
user_num = Integer(gets.chomp)

if user_num < 0
  puts "You picked a negative integer!"
elsif user_num > 0
  puts "You picked a positive integer!"
else
  puts "You picked zero!"
end

# Other excercise 
if 10 > 5
    puts "I'm being printed because 10 is greater than 5!"
end

# Other excercise 
if 10 > 15
    puts "I'm being printed because 10 is greater than 5!"
  else
    puts "that isn't right"
  end

# Other excercise 
  if 10 > 15
    puts "I'm being printed because 10 is greater than 5!"
  elsif 10 < 15
    puts "10 iis less than 15!"
  else
    puts "that isn't right"
  end