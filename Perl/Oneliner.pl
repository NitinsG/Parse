#Getting the first 

# -n command line argument that loops over the input 
# -p argument makes sure the code gets executed on every line, and that the line gets printed out after that.
# -e It allows you to specify the Perl code to be executed right on the command line.
# -i argument makes sure that file gets edited in-place, meaning Perl opens the file, executes the substitution for each line, 
#    prints the output to a temporary file, and then replaces the original file.

perl -n -e '@w = split;print grep { /^\[\d+/} @w;print " $w[-1]\n"' <FileName>

#Find the number of occuerence
perl -n -e 'if(exists($hef{$_})){
              $hef{$_}++
             }else{ 
              $hef{$_}=1
             };
            END{ 
              foreach $key (keys %hef){ 
                print "$key => $hef{$key}\n"
              }
            }' <FileName>

cat MSISDN_RES.txt | perl -n -e '@w=split;
                                 $len=scalar @w;
                                 if($len==8){ 
                                     ($mis) = $_ =~ m/(\d{10,12})/g;
                                     print $mis." $w[-1]\n"
                                 } else { 
                                     print $_
                                 }' > MSISDN_Response.txt

#--------Map function-------------- 

#This function Evaluates EXPR or BLOCK for each element of LIST. For each iteration, $_ holds the value of the current element, 
#which can also be assigned to allow the value of the element to be updated.
#Simply, Perl's map() function runs an expression on each element of an array, and returns a new array with the results.
#map EXPR, LIST
#map BLOCK LIST

#!/usr/bin/perl -w

@myNames = ('jacob', 'alexander', 'ethan', 'andrew');
@ucNames = map(ucfirst, @myNames);

foreach $key ( @ucNames ) {
   print "$key\n";
}

# Output of above will be Jacob, Alexander, Ethan, Andrew.

#Sort the number of words present in a file.
cat corpus.txt|perl -e 'while (<>) { map { $c{lc($_)} += 1 } split (/[^\w]+/) };map { print $_ . "\t" . $c{$_} . "\n" } keys %c' | sort -k 2 -n -r

#-------Grep Function--------------
#This function extract any elements from LIST for which EXPR is TRUE
#grep EXPR, LIST

#!/usr/bin/perl
@list = (1,"Test", 0, "foo", 20 );
@has_digit = grep ( /\d/, @list );
print "@has_digit\n";  #Output will be (1,0,20)


#!/usr/bin/perl
les = glob "*.log";
my @old_files = grep { -M $_ > 365 } @files;
print join "\n", @old_files;

#glob "*.log" will return all the files with a .log extension in the current directory.
#-M $path_to_file returns the number of days passed since the file was last modified.
#This example filters out the files that have been modified within the last year, and only let's through files that are at least one year old.
