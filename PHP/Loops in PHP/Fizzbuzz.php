<?php
$counter = 1;
$output = [];
for($i = 1; $i <= 100; $i++){
  if($counter % 15 === 0){
    array_push($output, "FizzBuzz");
  }else if($counter % 3 === 0){
    array_push($output, "Fizz");
  }else if($counter % 5 === 0){
    array_push($output, "Buzz");
  }else{
    array_push($output, "{$counter}");
  }
  $counter++;
}
foreach($output as $value){
  if($value === "Fizz"){
    continue;
  }elseif($value === "FizzBuzz"){
    echo $value;
    break;
  }
  echo $value . "\n";
}

  $counter++;

