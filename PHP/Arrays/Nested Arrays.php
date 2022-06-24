<?php
namespace Codecademy;


$treasure_hunt = ["garbage", "cat", 99, ["soda can", 8, ":)", "sludge", ["stuff", "lint", ["GOLD!"], "cave", "bat", "scorpion"], "rock"], "glitter", "moonlight", 2.11];
  
// Write your code below:
$levelOne = $treasure_hunt[3];
$levelTwo = $levelOne[4];
$levelThree = $levelTwo[2];

echo $levelThree[0];