<?php

//// POST Method (Has been given up)
// $distance=$_POST["distance"];
// $coin=$_POST["coin"];
// $score=_$POST["score"];

//保存前10条记录
$displayNum=3;

$distance=$_GET["distance"];
$coin=$_GET["coin"];
$score=$_GET["score"];
$level=$_GET["level"];



// Record the score
$file=fopen("records/score.csv","r")
	or exit("File can not be opened");

$i=0;
$weight[0]=$score*10000+$level;
$i++;

while ($data = fgetcsv($file)){
    $weight[$i]=$data[0]*10000 + $data[1];
    $i++;
}
fclose($file);

rsort($weight);

$file=fopen("records/score.csv","w")
    or exit("File can not be opened");

if($i>$displayNum){
    $i=$displayNum;
}

for ($j=0; $j < $i; $j++) { 

    fputcsv($file, array( (int)($weight[$j]/10000), $weight[$j]%10000))
        or exit("File can not be written");
}

fclose($file);



	

$file=fopen("records/distance.csv","r")
    or exit("File can not be opened");

$i=0;
$dList[0]=$distance;
$i++;

while ($data = fgetcsv($file)){
    $dList[$i]=$data[0];
    $i++;
}
fclose($file);

rsort($dList);

$file=fopen("records/distance.csv","w")
    or exit("File can not be opened");

if($i>$displayNum){
    $i=$displayNum;
}

for ($j=0; $j < $i; $j++) { 

    fputcsv($file, array($dList[$j]))
        or exit("File can not be written");
}

fclose($file);


$file=fopen("records/coins.csv","r")
    or exit("File can not be opened");

$totalDeath=0;
if($data=fgetcsv($file)){
    $totalCoin=$data[0]+$coin;
    $totalDeath=$data[1]+1;
}else{
    $totalCoin=$coin;
    $totalDeath=1;
}

fclose($file);

$file=fopen("records/coins.csv","w")
    or exit("File can not be opened");


fputcsv($file, array($totalCoin,$totalDeath))
        or exit("File can not be written");
fclose($file);

?>

