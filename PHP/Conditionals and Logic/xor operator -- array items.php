<?php
namespace Codecademy;
$banana_cream = ["whole milk", "sugar", "cornstarch", "salt", "egg yolks", "butter", "vanilla extract", "bananas", "heavy cream", "powdered sugar"];
$experimental_pie = ["whole milk", "sugar", "bananas", "chicken", "salmon", "garlic"];

// Write your code below:

function eatPie($ingredients){
if (in_array("chicken", $ingredients) xor in_array("bananas", $ingredients)){
  return "Delicious pie!\n";
}else{
  return "Disgusting!\n";
}
}

echo eatPie($banana_cream);
echo eatPie($experimental_pie);