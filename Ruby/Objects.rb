# Ruby is a very pure object-oriented language: all values are objects, and there is no distinction between primitive types and object types as there are in many other lan-guages. 
# In Ruby, all objects inherit from a class named Object and share the methods defined by that class

# When we work with objects in Ruby, we are really working with object references. It is not the object itself we manipulate but a reference to it. 
# When we assign a value to a variable, we are not copying an object “into” that variable; we are merely storing a reference to an object into that variable. 
# Some code makes this clear:

s = "Ruby"         # Create a String object. Store a reference to it in s.
t= s               # Copy the reference to t. s and t both refer to the same object.
t[-1] = ""         # Modify the object through the reference in t.
print s            # Access the modified object through s. Prints "Rub".
t = "Java"         # t now refers to a different object.
print s,t          # Prints "RubJava".

# When you pass an object to a method in Ruby, it is an object reference that is passed to the method. 
# It is not the object itself, and it is not a reference to the reference to the object. 
# Another way to say this is that method arguments are passed by value rather than by reference, but that the values passed are object references.

# Because object references are passed to methods, methods can use those references to modify the underlying object. 
# These modifications are then visible when the method returns.

# Note : Fixnum and Symbol objects are actually “immediate values” rather than references. 
# Neither of these classes have mutator methods, so Fixnum and Symbol objects are immutable, which means that there is really no way to tell that 
# they are manipulated by value rather than by reference.

# Object Class and Object Type Ruby 1.8
o.class # String: o is a String object 
o.class.superclass # Object: superclass of String is Object 
o.class.superclass.superclass # nil: Object has no superclass

# Ruby 1.9 only
Object.superclass # BasicObject: Object has a superclass in 1.9 
BasicObject.superclass # nil: BasicObject has no superclass

o.class == String # true if is o a String
o.instance_of? String # true if o is a String , more eligant way to check than ==

x=1                        # This is the value we're working with
x.instance_of? Fixnum      # true: is an instance of Fixnum
x.instance_of? Numeric     # false: instance_of? doesn't check inheritance
x.is_a? Fixnum             # true: x is a Fixnum
x.is_a? Integer            # true: x is an Integer
x.is_a? Numeric            # true: x is a Numeric
x.is_a? Comparable         # true: works with mixin modules, too
x.is_a? Object             # true for any value of x

Numeric === x # true: x is_a Numeric , can also be used in place of is_a

# In Ruby programming, we often don’t care about the class of an object, we just want to know whether we can invoke some method on it.

o.respond_to? :"<<" # true if o has an << operator

# Object Equality

a = "Ruby"        # One reference to one String object
b = c = "Ruby"    # Two references to another String object
a.equal?(b)       # false: a and b are different objects
b.equal?(c)       # true: b and c refer to the same object

a = "Ruby" # One String object
b = "Ruby"

a.equal?(b) # false: a and b do not refer to the same object
a == b # true: but these two distinct objects have equal values

# Two arrays are equal according to == if they have the same number of elements, and if their corresponding elements are all equal according to ==. 
# Two hashes are == if they contain the same number of key/value pairs, and if the keys and values are themselves equal.
# The == operator of classes, such as String and Array, normally requires both operands to be of the same class. 
# If the righthand operand defines a to_str or to_ary conversion function (see §3.8.7), then these operators invoke the == operator defined by the righthand operand, 
# and let that object decide whether it is equal to the lefthand string or array

1 == 1.0 # true: Fixnum and Float objects can be == 
1.eql?(1.0) # false: but they are never eql! eql? is same like equal?

# === operator, have different implementation in different classes , like in range , regex , Class, symbol.

(1..10) === 5 # true: 5 is in the range 1..10
/\d+/ === "123" # true: the string matches the regular expression 
String === "s" # true: "s" is an instance of the class String 
:s === "s" # true in Ruby 1.9
