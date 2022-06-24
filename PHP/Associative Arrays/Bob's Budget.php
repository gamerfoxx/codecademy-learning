<?php
  
$annualExpenses = [
    "vacations" => 1000,
    "carRepairs" => 1000,    
];

$monthlyExpenses = [
    "rent" => 1500,
    "utilities" => 200,
    "healthInsurance" => 200
];
$weeklyExpenses = [
    "gas" => 25,
    "food" => 90,
    "entertainment" => 47
];

$grossSalary = 48150;
$socialSecurity = $grossSalary * .062;

$incomeSegments = [[9700, .88], [29775, .78], [8675, .76]];

// Write your code below:
$netIncome = ($incomeSegments[0][0] * $incomeSegments[0][1]) + ($incomeSegments[1][0] * $incomeSegments[1][1]) + ($incomeSegments[2][0] * $incomeSegments[2][1]);
$annualIncome = $netIncome - $socialSecurity;
echo "Annual income before deducting annual expenses:\n$annualIncome\n";

$annualIncome -= $annualExpenses["vacations"];
$annualIncome -= $annualExpenses["carRepairs"];

echo "Annual income after deducting annual expenses:\n$annualIncome\n";

$monthlyIncome = round(($annualIncome/12), 2);
echo "Monthly income before deducting monthly expenses:\n$monthlyIncome\n";

$monthlyIncome -= $monthlyExpenses['rent'] + $monthlyExpenses['utilities'] + $monthlyExpenses['healthInsurance'];
echo "Monthly income after deducting monthly expenses:\n$monthlyIncome\n";

$weeklyIncome = round(($monthlyIncome/4.33), 2);

echo "Weekly income before deducting weekly expenses:\n$weeklyIncome\n";

$weeklyIncome -= $weeklyExpenses['gas'] + $weeklyExpenses['food'] + $weeklyExpenses['entertainment'];

echo "Weekly income after deducting weekly expenses:\n$weeklyIncome\n";

$totalSaved = $weeklyIncome * 52;

echo $totalSaved;