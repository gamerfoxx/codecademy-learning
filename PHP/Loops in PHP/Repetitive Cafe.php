<h1>Welcome to the Repetitive Cafe</h1>
<?= $drinks = [
  "cola" => 0.99,
  "coffee" => 1.99,
  "latte" => 2.99,
  "iced latte" => 3.99
]

$patries = [
  'muffin',
  'cupcake',
  'bread',
  'cake'
] ?>
<h3>Drinks!</h3>
<ul>

<?=php foreach($drinks as $drink => $value): ?>
<li><?="$drink: $$value"?></li>

<?php
endforeach;
?>
</ul>
<h3>Pastries! ($2 each)</h3>
<ul>

</ul>
