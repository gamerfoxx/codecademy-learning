<?php
namespace Codecademy;
function agreeOrDisagree($strOne, $strTwo){
  if($strOne === $strTwo) {
    return "You agree!";
  }else{
    return "You disagree!";
  }
}

echo agreeOrDisagree('strOne', 'strTwo');
echo agreeOrDisagree('strOne', 'strOne');

function checkRenewalMonth($month) {
  $currMonth = date("F");
  if($month !== $currMonth){
    return "Welcome!";
  }else {
    return "Time to renew";
  }
}
echo checkRenewalMonth("month");
echo checkRenewalMonth("December");