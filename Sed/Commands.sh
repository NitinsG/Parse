
sed -i /^$/d <File_Name>                           #command to delete blank lines
sed -i 1d <FileName>                               #command to delete first line from file
sed '7,9d' filename.txt                            #remove lines 7 to 9
sed '$d' filename.txt                              #remove last line from file.
sed '/awk/d' filename.txt                          #remove lines from file having awk in lines. 

:%g/^$/d                                           #for removing blank lines from file using vim.

sed -i -r 's/\]|\[//g' <FileName>                  #command to remove [] from line like [23-4-2013 23:30],....

sed 's/.\{4\}$//' <FileName>                       #command to delete last 4 chacter of every line.

sed  "s/^\([0-9]*\)-\([0-9]*\)-\([0-9]*\)/\3-\2-\1/g" <FileName> #to change the format of date in reverse order



