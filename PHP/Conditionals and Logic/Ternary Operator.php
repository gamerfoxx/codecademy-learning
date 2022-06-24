<?php
namespace Codecademy;
function ternaryCheckout($num){
  return $num <= 12 ? "express lane" : "regular lane";
}

function ternaryVote($age) {
  return $age >= 18 ? "yes" : "no";
}

echo ternaryVote(17);
echo ternaryVote(19);
echo ternaryCheckout(17);
echo ternaryCheckout(11);