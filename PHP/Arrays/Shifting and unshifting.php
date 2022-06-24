<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:

array_unshift($record_holders, "Tim Montgomery", "Maurice Greene", "Donovan Bailey", "Leroy Burrell", "Carl Lewis");

echo implode(", ", $record_holders);

array_shift($record_holders);

array_unshift($record_holders, "Justin Gatlin", "Asafa Powell");
echo implode(", ", $record_holders);
array_shift($record_holders);

array_unshift($record_holders, "Usain Bolt");