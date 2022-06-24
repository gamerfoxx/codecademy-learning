puts "Text to search through: "
text = gets.chomp
puts "Word to redact: "
redact = gets.chomp
words = text.split(" ")
words.each do |word|
if word == redact
   print "REDACTED "
else
   print word + " "
end
end