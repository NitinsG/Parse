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


