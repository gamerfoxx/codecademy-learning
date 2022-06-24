<?php
class Beverage {
  public $temperature, $color, $opacity;
  function getInfo(){
    return "This beverage is $this->temperature and $this->color.";
  }
}

$soda = new Beverage();
$soda->color = "black";
$soda->temperature = "cold";
echo $soda->getInfo();