#Text is represented in Ruby by objects of the String class. Strings are mutable objects, 
#and the String class defines a powerful set of operators and methods for extracting substrings, 
#inserting and deleting text, searching, replacing, and so on.

#The sequence %q begins a string literal that follows single-quoted string rules, and the sequence %Q (or just %) introduces a literal that follows double-quoted string rules. 
#The first character following q or Q is the delimiter character, and the string literal continues until a matching (unescaped) delimiter is found. 
#If the opening delimiter is (, [, {, or <, then the matching delimiter is ), ], }, or >. (Note that the backtick ` and apostrophe ' are not a matched pair.) 
#Otherwise, the closing delimiter is the same as the opening delimiter.

%q(Don't worry about escaping ' characters!)
%Q|"How are you?", he said|
%-This string literal ends with a newline\n- # Q omitted in this one

%(A mismatched paren \( must be escaped) # Escape needed here

#Here Documents

document = <<HERE                         # This is how we begin a here document This is a string literal.
It has two lines and abruptly ends...
HERE

#Accessing substring
s = 'hello';
p s[0]    # "h"
p s[-1]   # "o"
p s[-2]   # "l"

s[0,2] # "he"
s[-1,1] # "o": returns a string, not the character code ?o 
s[0,0] # "": a zero-length substring is always empty
s[0,10] # "hello": returns all the characters that are available 
s[s.length,1] # "": there is an empty string immediately beyond the end 
s[s.length+1,1] # nil: it is an error to read past that
s[0,-1] # nil: negative lengths don't make any sense

p s[-1,1]   #starting from last character to length 1 beyond , "o"
p s[0,2]    #starting from index 0 and total length 2 , "he"
p s[-3,2]   #Starting from -3 and total of 2 in length, "ll" 

#If you assign a string to a string indexed like this, you replace the specified substring with the new string. 
#If the righthand side is the empty string, this is a deletion, and if the lefthand side has zero-length, this is an insertion:

s = "hello"
s[0,1] = "H" # Replace first letter with a capital letter 
s[s.length,0] = " world" # Append by assigning beyond the end of the string 
s[5,0] = "," # Insert a comma, without deleting anything 
s[5,6] = "" # Delete with no insertion; s == "Hellod"

#When a Range is used to index a string, the return value is the substring whose characters fall within the Range:

s = "hello"
s[2..3] # "ll": characters 2 and 3
s[-3..-1] # "llo": negative indexes work, too
s[0..0] # "h": this Range includes one character index

#In place of each, Ruby 1.9 defines three clearly named string iterators: each_byte iterates sequentially through the individual bytes that comprise a string; 
#each_char iterates the characters; and 
#each_line iterates the lines. 
#If you want to process a string character-by-character, it may be more efficient to use each_char than to use the [] operator and character indexes:

s = "¥1000"
s.each_char {|x| print "#{x} " }

