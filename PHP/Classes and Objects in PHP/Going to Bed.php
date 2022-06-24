<?php
class StringUtilities{
  public static function invertedCase($str){
    $str = strtolower($str);
    if(strlen($str) > 1){
      $str[1] = strtoupper($str[1]);
    }

    return $str . "\n";
  }
}

class Pajamas{
  private $owner, $fit, $color;
    function __construct($owner, $fit, $color) {
    $this->owner = $owner;
    $this->fit = $fit;
    $this->color = $color;

  }
      public function setFit($new_fit) {
    $this->fit = $new_fit;
    return $this->fit;
}

  public function describe(){
    return "These PJs are owned by {$this->owner} they are very {$this->fit} and {$this->color}";
  }
}

class ZipUpPajamas extends Pajamas{
  private $zipper_state = "un-zipped";

  public function toggleZip() {
    if($this->zipper_state === "un-zipped"){
      $this->zipper_state = "zipped";
    }else{
      $this->zipper_state = "un-zipped";
    }
  }
    public function describe() {
  return parent::describe() . " They also have a zipper which is currently $this->zipper_state.";
}
}

$fox_PJs = new Pajamas("fox", "just right", "pink");
$wolf_PJs = new ZipUpPajamas("Wolf", "too tight", "red");
echo $wolf_PJs->describe();
$wolf_PJs->toggleZip();
echo $wolf_PJs->describe();