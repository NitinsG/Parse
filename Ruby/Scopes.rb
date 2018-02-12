#Every method/module/class, definition is known as a scope gate, because a new scope is created. 
#The old scope is no longer available to you, and all variables available in it are replaced with the new ones.

#Scope Gate are functions , Classes , Modules , means anything created inside will be new and will not be accessible outside.

#start of new scope
def print_local
    c = 1               #Both c and b scopes visible inside function only
    b = 1
    p "Inside function body #{local_variables}"    #print [:c , :b]
end
#end of scope

print_local
p local_variables       #print [] 

#There is no Scope gate with if block 

#same scope
if true
   a = 1
else
   b = 1
end

p a #print 1
#same scope

#Do end Block: Have special meaning , it can access outside variables and even can create/delecare new scope which wont be accessibel outside.

hi = 'hi'
hello = 'hello'

[1,2].each do |item|
  p hi                         #hi variable avaiable inside the do end block 
  hello = 'Hello again'        #ruby first check if variable name exits then assign the value to it.
  ruby = 'Ruby'                #first time decleared inside do end block, scope till end statement.
end
# "hi"
# "hi"

p hello # "Hello again"
p ruby  # Error Undefined

#If blocks were scope gates, then puts hi would produce an error because the hi variable is in a separate scope. 
#Yet, this is not the case, and you can see that by running the code above.

#Not only can you access outside variables, but change their content as well! Try putting hi = '456' inside do/end and its content will be changed.

#What if you don’t want blocks to modify outside variables? Block-local variables can help. 
#To define block-local variables, put a semicolon at the end of the block’s parameters (the block below has only 1 parameter, i) and then just list them:

hi = 'hi'
hello ='hello'
3.times do |i; hi, hello|
  p i
  hi = 'hi again'
  hello = 'hello again'
end
p hi # "hi"
p hello # "hello"

