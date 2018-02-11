#Awk Command
#Here BEGIN and END blocks will execute only once 
#Here calculating the sum of one numeric column 

awk -F'|' 'BEGIN{NR=2;count=1;}{count = $2+count;}END{print count;} <File_Name> #NR=2 staring from Row 2

awk -F'|' 'BEGIN{count=0;}{count=$2+$count;}END{print count;}' <File_Name>

grep -w -A 1 "TOTAL REVENUE" checkRevenuetest.txt| grep "^[0-9]*\.[0-9]*" | awk 'BEGIN{sum=0}{sum=sum+$1}END{printf("%5.3f",sum);}'

#Examples:

awk '{if(/^0/){ print $0 }}' 51-tcp-dump.txt | sed 's/^0000/-\n&/'| awk -F'  ' '{print $3}' | sed 's/^\s//g'
awk '{if(/^0/){ print $0 }}' 51-tcp-dump.txt | sed 's/^0000/\n&/' | awk -F'  ' '{print $3}' | sed 's/^\s//g' |tr -d '\n'| sed 's/POST/\n&/g'
awk '{if(/^0/){ print $0 }}' 51-tcp-dump.txt | sed 's/^0000/\n-\n&/' | awk -F'  ' '{print $3}' | sed 's/^\s//g'|sed s/^$/--/g|tr -d '\n'| sed 's/--/\n/g'

awk -F' -->' '{print $2}' CBSuccessTransactions.log.2013-06-09* | awk -F'|' '{if($12==""){print $12}}' | wc -l #Number of blank content type


#Pass Shell Variables To awk
root="/webroot"
echo | awk -v r=$root '{ print "shell root value - " r}'
