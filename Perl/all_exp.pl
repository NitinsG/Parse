This is perl on-liner that is used for counting hits per seconds. Can also be used for finding duplicates line.
  perl -n -e 'if(exists($hef{$_})){$hef{$_}++}else{ $hef{$_}=1};END{ foreach $key (keys %hef) { print "$key => $hef{$key}\n"}}' test_nitin
  perl -n -e 'chomp($_);if(exists($hef{$_})){$hef{$_}++}else{ $hef{$_}=1};END{ foreach $key (keys %hef) { print "$key => $hef{$key}\n"}}'
  sed '/^$/d' UninorWapSite.log.2012-12-02 | awk -F',' '{print $1}' | perl -n -e 'BEGIN{ use Data::Dumper} if(exists($hef{<>})){$hef{<>}++}else{ $hef{<>}=1};END{ foreach $key (keys %hef) {print "$hef{$key}"}}'| head -10

#List of Ips
 perl -n -e '@w = split;print grep { /newsfeeds/} @w;print " $w[-1]\n"' access.log | sort -r | uniq -c | sort -n -s -k1,1 | tail

#Highest Used APIs
 grep '10/Sep/2020:09' access.log| cut -f7 -d ' ' | sort -r | uniq -c | sort -n -s -k1,1 | tail

#Get the IP from List of IPS who is hitting and get the URLs
 grep '10/Sep/2020:09' access.log| grep '122.170.75.188' |cut -f7 -d ' ' | sort -r | uniq -c | sort -n -s -k1,1 | tail

#Agent Used
 perl -n -e '@w = split;print grep { /newsfeeds/} @w;print "$w[-6] $w[-5] $w[-4] $w[-3] $w[-2]\n"' access.log | sort -r | uniq -c | sort -n -s -k1,1

 cat MSISDN_RES.txt | perl -n -e '@w=split;$len=scalar @w;if($len==8){ ($mis) = $_ =~ m/(\d{10,12})/g;print $mis." $w[-1]\n"} else { print $_} ' > MSISDN_Response.txt

 cat corpus.txt|perl -e 'while (<>) { map { $c{lc($_)} += 1 } split (/[^\w]+/) };map { print $_ . "\t" . $c{$_} . "\n" } keys %c' | sort -k 2 -n -r
 cat test_sample.txt | perl -n -e 'map { print lc($_) . "\n" } split(/[^\w]+/)' | perl -n -e 'chomp($_);if(exists($hef{$_})){$hef{$_}++}else{ $hef{$_}=1};END{ foreach $key (keys %hef) { print "$key \t $hef{$key}\n"}}'| sort -k 2 -n -r
 
 sed '/^$/d' UninorWapSite.log.2012-12-02 | awk -F',' '{print $1}' | perl -n -e  '$_=<>;chomp($_);if(exists($hef{$_})){$hef{$_}++}else{ $hef{$_}=1};END{ foreach $key (keys %hef) {print "$key => $hef{$key}\n"}}'
