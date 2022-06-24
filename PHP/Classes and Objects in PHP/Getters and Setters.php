<?php
class Beverage {
  private $color;
  function setColor($newColor){
    if(gettype($newColor) === "string"){
      $this->color = strtolower($newColor);
      return true;
    } else{
      return false;
    }
  }
  function getColor(){
    return $this->color;
  }
}

$soda = new Beverage();

