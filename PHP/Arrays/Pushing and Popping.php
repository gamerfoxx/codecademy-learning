<?php
namespace Codecademy;

$stack = ["wild success", "failure", "struggle"];
// Write your code below:
array_push($stack, "blocker", "impediment");

print_r($stack);

array_pop($stack);
array_pop($stack);
array_pop($stack);
array_pop($stack);

print_r($stack);