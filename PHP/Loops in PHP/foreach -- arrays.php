<?php
$scores = [
  "Alice" => 99,
  "Bob" => 95,
  "Charlie" => 98,
  "Destiny" => 91,
  "Edward" => 88
];

foreach ($scores as $player => $score) {
  echo "{$player} received a score of {$score}.\n";
}