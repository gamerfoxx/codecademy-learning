<?php
namespace Codecademy;
function airQuality($quality){
switch ($quality){
  case "green":
    echo "good";
    break;
  case "yellow":
    echo "moderate";
    break;
  case "orange":
    echo "unhealthy for sensitive groups";
    break;
  case "red":
    echo "unhealthy";
    break;
  case "purple":
    echo "very unhealthy";
    break;
  case "maroon":
    echo "hazardous";
    break;
  default:
    echo "invalid color"; 
};
}

echo airQuality("green");
airQuality("green");
echo "\n\n";
airQuality("yellow");
echo "\n\n";
airQuality("maroon");
echo "\n\n";
airQuality("hasjgdlajshgd");