#if else syntax along with operator

#!/bin/bash
count=90
if [ $count < 100 ] ; then
  echo "Count is less than 100"
else
  echo "Count is more than 100"
fi

Error: can't open file 100 , it just trying to redirect as operator used is <.

#------------

#!/bin/bash
count=90
if [[ $count < 100 ]] ; then
  echo "Count is less than 100"
else
  echo "Count is more than 100"
fi

#Ouput: Count is more than 100, unexpected output why? As the < in [[ ]] converts the oprators into unspillted string and then compare them. So its doing string 
#comparison rather than integer. http://mywiki.wooledge.org/BashGuide/TestsAndConditionals#Conditional_Blocks_.28if.2C_test_and_.5B.5B.29 

#------------

#!/bin/bash
count=90
if (( $count < 100 )) ; then
  echo "Count is less than 100"
else
  echo "Count is more than 100"
fi

echo $count

#Output: count is less than 100. correct output doing numerical comparison.

#------------

# Note that the comparison operators =, !=, >, and < treat their arguments as strings. In order for the operands to be treated as numbers, you need to use one 
# of a different set of operators: -eq, -ne (not equal), -lt (less than), -gt, -le (less than or equal to), or -ge. 

# Good Practice: 
# Whenever you're making a Bash script, you should always use [[ rather than [. 
# Whenever you're making a Shell script, which may end up being used in an environment where Bash is not available, you should use [, because it is far more portable. 
# (While being built in to Bash and some other shells, [ should be available as an external application as well; meaning it will work as argument to, 
# for example, find's -exec and xargs.) 
# Don't ever use the -a or -o tests of the [ command. Use multiple [ commands instead (or use [[ if you can). 
# POSIX doesn't define the behavior of [ with complex sets of tests, so you never know what you'll get.

if [ "$food" = apple ] && [ "$drink" = tea ]; then
  echo "The meal is acceptable."
fi

#!/bin/bash
# or example
if [ $USER == 'bob' ] || [ $USER == 'andy' ]
 then
    ls -alh
 else
    ls
fi

#-----------

#!/bin/bash
# elif statements
if [ $1 -ge 18 ]
 then
   echo You may go to the party.
elif [ $2 == 'yes' ]
 then
   echo You may go to the party but be back before midnight.
else
   echo You may not go to the party.
fi


