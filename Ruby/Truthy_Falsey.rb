#Check truthy and falsey in Ruby
#In Ruby only nil and false are falsey. Everything else is truthy.

# True evaluates to an object that is a singleton instance of TrueClass. 
# Likewise, false and nil are singleton instances of FalseClass and NilClass. 
# Note that there is no Boolean class in Ruby. TrueClass and FalseClass both have Object as their superclass.
# If you want to check whether a value is nil, you can simply compare it to nil, or use the method nil?:

o == nil # Is o nil?
o.nil? # Another way to test

def truthy_or_falsey value
  if value
    puts "#{value.inspect} is truthy"
  else
    puts "#{value.inspect} is falsey" 
  end
end

[true, false, Object, 0, 1, nil, true, false, "", [1, 2, 3], {}].each do |value|
  truthy_or_falsey(value)
end

#OutPut is:
 
#true is truthy
#false is falsey
#Object is truthy
#0 is truthy
#1 is truthy
#nil is falsey
#true is truthy
#false is falsey
#"" is truthy
#[1, 2, 3] is truthy
#{} is truthy

# Note that true, false, and nil refer to objects, not numbers. 
# false and nil are not the same thing as 0, and true is not the same thing as 1. 
# When Ruby requires a Boolean value, nil behaves like false, and any value other than nil or false behaves like true.
