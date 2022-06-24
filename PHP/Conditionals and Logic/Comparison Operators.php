<?php
namespace Codecademy;
 function chooseCheckoutLane($num){
   if($num <= 12){
      return "express lane";
   }else{
     return "regular lane";
   }
 }

 function canIVote($age) {
   if($age < 18){
      return "no";
   }else{
     return "yes";
   }
 }

echo canIVote(17);
echo  canIVote(20);
echo  chooseCheckoutLane(11);
echo    chooseCheckoutLane(13);