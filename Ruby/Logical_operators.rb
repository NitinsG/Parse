#Logical (boolean) operators like &&, ||, and ! are methods. That means they return something.

#Short Circuiting : 
# && eveultes both the expression if first is true
4 && 5 # This returns 5
nil && true # This returns nil
true && nil # This returns nil
true || nil # This returns true
nil || "" # This returns ""

hash = {1 => 'foo', 2 => 'bar'}
puts "hash[1] is #{hash[1].inspect}"
puts "hash[2] is #{hash[2].inspect}"
puts "hash[1 && 2] is #{hash[1 && 2].inspect} because 1 && 2 evaluates to 2 and hash[2] is #{hash[2].inspect}"

#Output
#hash[1] is "foo"
#hash[2] is "bar"
#hash[1 && 2] is "bar" because 1 && 2 evaluates to 2 and hash[2] is "bar"
