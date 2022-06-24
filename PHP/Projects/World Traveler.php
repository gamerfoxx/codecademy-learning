<?php
  $currRiel = 2103942;
  $currKyat = 19092;
  $currKrones = 109;
  $currLek = 9094;
echo "We started with $currRiel riel, $currKyat kyat, $currKrones krones, and $currLek lek";
  $exchangeRiel = 0.00031;
  $exchangeKyat = 0.00071;
  $exchangeKrones = 0.14092;
  $exchangeLek = 0.011936;
  
  $CADRiel = $currRiel * $exchangeRiel;
  $CADKyat = $currKyat * $exchangeKyat;
  $CADKrones = $currKrones * $exchangeKrones;
  $CADLek = $currLek * $exchangeLek;
  $CADTotal = $CADRiel + $CADKyat + $CADKrones + $CADLek;
echo "\nConverted to CAD this is $CADTotal";
  $CADTotal -= 4;
echo "\nAfter fees this is $CADTotal";