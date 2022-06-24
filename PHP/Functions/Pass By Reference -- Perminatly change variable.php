<?php

$string_one = "you have teeth";
$string_two = "toads are nice";
$string_three = "brown is my favorite color";

// Write your code below:
function convertToQuestion(&$str){
  $str = "Do you think " . $str . "?\n";
  return $str;
}
echo convertToQuestion($string_one);
echo convertToQuestion($string_two);
echo convertToQuestion($string_three);

echo $string_one;
echo $string_two;
echo $string_three;