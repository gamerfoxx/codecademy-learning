<?php

$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;
echo "Please guess a number between 1 - 10. This will be played 10 times to see who the winner is.\n";

function guessNumber() {
  global $guess_high, $guess_low, $correct_guesses, $play_count;
  $play_count++;
  $numToGuess = rand(1, 10);
  echo "\nCHOOSE YOUR NUMBER!\n";
  do {
  $playerGuess = readline(">> ");
  $playerGuess = (int) $playerGuess;
} while ($playerGuess > 10 || $playerGuess < 1);

  echo "Round: ${play_count}\n Number was: ${numToGuess} \n You Guessed ${playerGuess}";
  if($playerGuess === $numToGuess) {
    $correct_guesses++;
  } elseif($playerGuess < $numToGuess){
    $guess_low++;
  }else{
    $guess_high++;
  }
}

for($i = 0; $i < 10; $i++){
  guessNumber();
}
$correct_Perc = $correct_guesses * 10;
echo "\nYou got ${correct_Perc}% correct\n";

if($guess_low < $guess_high){
  echo "When you guessed wrong, you tended to guess high.\n";
}else {
  echo "When you guessed wrong, you tended to guess low.\n";
}