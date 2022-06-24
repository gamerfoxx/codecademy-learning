<?php
// Write your code below:
function calculateTip($meal, $tip = 20) {
  return $meal + ($meal * ($tip / 100));
}

echo calculateTip(65, 15);
echo calculateTip(100);