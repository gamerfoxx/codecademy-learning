<?php
namespace Codecademy;

// Write your code below:
function convertToShout($str) {
  return strtoupper($str) . "!";
}

function tipGenerously($num) {
  return ceil($num * 1.20);
}

function calculateCircleArea($diameter) {
  return pi() * ($diameter/2) ** 2;
}

echo calculateCircleArea(25);