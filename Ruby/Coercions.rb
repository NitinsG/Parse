# Numeric types define a conversion method named coerce. The intent of this method is to convert the argument to the same type 
# as the numeric object on which the method is invoked, or to convert both objects to some more general compatible type. 
# The coerce method always returns an array that holds two numeric values of the same type.

1.1.coerce(1) # [1.0, 1.1]: coerce Fixnum to Float
require "rational" # Use Rational numbers
r = Rational(1,3) # One third as a Rational number
r.coerce(2) # [Rational(2,1), Rational(1,3)]: Fixnum to Rationa

# Numeric operators are written so that if they don’t know the type of the righthand operand, 
# they invoke the coerce method of the righthand operand, passing the lefthand operand as an argument. 
# Returning to our example of adding a Fixnum and a Rational, the coerce method of Rational returns an array of two Rational values. 
# Now the + operator defined by Fixnum can simply invoke + on the values in the array.
