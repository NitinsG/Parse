#If you attempt to read an element beyond the end of an array (with an index >= size) or before the beginning of an array (with an index < -size), 
#Ruby simply returns nil and does not throw an exception.

[1, 2, 3] # An array that holds three Fixnum objects
[-10...0, 0..10,] # An array of two ranges; trailing commas are allowed 
[[1,2],[3,4],[5]] # An array of nested arrays

#%w and %W are same as %q and %Q
words = %w[this is a test] #Same as ['this','is','a','test']
white = %W(\s \t \r \n) #Same as ["\s","\t","\r","\n"]

a = [1, 2, 3] + [4, 5]  # [1, 2, 3, 4, 5]
a = a + [[6, 7, 8]]  #[1, 2, 3, 4, 5, [6, 7, 8]]
a = a + 9   # Error: righthand side must be an array

a = []                        # Start with an empty array # a is [1]
a << 1                        # a is [1, 2, 3] 
a << 2 << 3 a << [4,5,6]      # a is [1, 2, 3, [4, 5, 6]]


#like the String class, Array also uses the multiplication operator for repetition: 
a = [0] * 8 # [0, 0, 0, 0, 0, 0, 0, 0]

# The Array class borrows the Boolean operators | and & and uses them for union and intersection. 
# | concatenates its arguments and then removes all duplicate elements from the result. 
# & returns an array that holds elements that appear in both of the operand arrays. 
# The returned array does not contain any duplicate elements:

a = [1, 1, 2, 2, 3, 3, 4] 
b = [5, 5, 4, 4, 3, 3, 2]
a | b                      # # [1, 2, 3, 4, 5]: duplicates are removed
b | a                      # [5, 4, 3, 2, 1]: elements are the same, but order is different
a & b                      # [2,3,4]
b & a                      # [4, 3, 2]


#Symbols
# You can convert a String to a Symbol using the intern or to_sym methods. 
# And you can convert a Symbol back into a String with the to_s method or its alias id2name:

str = "string"           # Begin with a string
sym = str.intern         # Convert to a symbol
sym = str.to_sym         # Another way to do the same thing
str = sym.to_s           # Convert back to a string
str = sym.id2name        # Another way to do it


