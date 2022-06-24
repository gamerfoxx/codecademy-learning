<?php
// Write your code below:
function increaseEnthusiasm($str) {
return $str . "!";
}

echo increaseEnthusiasm("dick");

function repeatThreeTimes($str) {
  return $str . $str . $str;
}

echo repeatThreeTimes("balls");
echo increaseEnthusiasm(repeatThreeTimes("balls"));