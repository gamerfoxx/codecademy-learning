<?php
class Beverage {
  public $temperature;
  
  function getInfo() {
    return "This beverage is $this->temperature.";
  }
}

class Milk extends Beverage {
  function __construct() {
    $this->temperature = "cold";
  }
  function getInfo() {
    return parent::getInfo() ." I like my milk this way.";
  }
}
$milk = new Milk();
echo $milk->getInfo();