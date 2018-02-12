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




