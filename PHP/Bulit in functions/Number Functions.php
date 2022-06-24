<?php
namespace Codecademy;

// Write your code below:

function calculateDistance($numOne, $numTwo) {
  return abs($numOne - $numTwo);
}

echo calculateDistance(-1, 4) . "\n";
echo calculateDistance(4, -1) . "\n";
echo calculateDistance(3, 7) . "\n";
echo calculateDistance(7, 3) . "\n";

function calculateTip($num) {
  return round($num * 1.18);
}

echo calculateTip(100) . "\n";
echo calculateTip(35) . "\n";
echo calculateTip(88.77) . "\n";