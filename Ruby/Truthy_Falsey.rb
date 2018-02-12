#Check truthy and falsey in Ruby
#In Ruby only nil and false are falsey. Everything else is truthy.

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
