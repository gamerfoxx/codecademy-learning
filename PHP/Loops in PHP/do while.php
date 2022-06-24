<?php
  $plant_height = 22;
do{
  echo "The plant is {$plant_height} tall.\n";
  if($plant_height >= 30){
  echo "And can produce fruit.";
}
$plant_height++;

}while($plant_height <= 30);