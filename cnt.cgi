#!/usr/local/bin/perl

$margin = 3600;
$d_margin = 86400;
open(IN, "data.dat");
@xx = <IN>;
close(IN);
$ip = $ENV{REMOTE_ADDR};
$time = time();
$c = shift(@xx);
$c =~ s/\r//;
$c =~ s/\n//;
$f = 1;
foreach $i (@xx){
	@s = split(/>/,$i);
	if($s[0] eq $ip){
		if($time - $s[1] > $margin){
			$c++;
		}
		$i = "$ip>$time\n";
		$f = 0;
		last;
	}
}
if($f){
	$c++;
}
for($j = 0; $j<7-length($c);$j++){
	$co = $co."0";
}
print "Content-Type: application/x-javascript\n\n"; 
print "document.write('$co');";
print "document.write('$c');";
$ki = 0;
foreach $k (@xx){
	@s = split(/>/,$k);
	if($time - $s[1] >$d_margin){
		splice(@xx,$ki);
	}
	$ki++;
}		
open(OUT, "> data.dat");
print(OUT "$c\n");
print(OUT @xx);
if($f){
	print(OUT "$ip>$time\n");
}
close(OUT);
