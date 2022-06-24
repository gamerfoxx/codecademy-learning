<?php
namespace Codecademy;

// Write your code below:
$hybrid_array =[
  'pie',
  'cake',
  'dirt',
  'cum',
  8 => "five more"
];

print_r($hybrid_array);

array_push($hybrid_array, rand());
print_r($hybrid_array);
echo $hybrid_array[9];