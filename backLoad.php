<?php

$scoreList="";
$levelList="";

$distanceList="";

$totalCoin="";
$totalDeath="";

$file=fopen("records/score.csv","r")
    or exit("File can not be opened");

$i=0;






while ($data = fgetcsv($file)){

    if($i==0){
        $scoreList=$scoreList . $data[0];
    }else{
        $scoreList=$scoreList . "," . $data[0];
    }

    if($i==0){
        $levelList=$levelList . $data[1];
    }else{
        $levelList=$levelList . "," . $data[1];
    }

    $i++;
    
}




$file=fopen("records/distance.csv","r")
    or exit("File can not be opened");

$i=0;

while ($data = fgetcsv($file)){

    if($i==0){
        $distanceList=$distanceList . $data[0];
    }else{
        $distanceList=$distanceList . "," . $data[0];
    }
    
    $i++;
}
fclose($file);


$file=fopen("records/coins.csv","r")
    or exit("File can not be opened");

$data = fgetcsv($file);

$totalCoin="" . $data[0];
$totalDeath="" . $data[1];

$information= $scoreList . "," . $levelList . "," . $distanceList . "," . $totalCoin . "," . $totalDeath;

echo $information;

?>