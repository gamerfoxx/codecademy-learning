<?php
namespace Codecademy;

$learner_one = ["is_correct"=>FALSE, "box"=>["shape"=>"none", "color"=>"none"]];
   
$learner_two = ["is_correct"=>TRUE, "box"=>["shape"=>"none", "color"=>"none"]];
  
  function markAnswer($one, &$two) {
    if($one){
      $two['shape'] = "checkmark";
      $two['color'] = "green";
    } else{
      $two['shape'] = "x";
      $two['color'] = "red";
    }
  }

echo markAnswer($learner_one["is_correct"], $learner_one["box"]);
echo markAnswer($learner_two["is_correct"], $learner_two["box"]);
print_r($learner_one["box"]);
print_r($learner_two["box"]);