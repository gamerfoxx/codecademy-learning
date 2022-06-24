<h1>Only Shoes Shoe Shop</h1>
<?php
$i = 0;
$repeats = [0, 1];
while ($i < 5) :
?>
<p>We sell shoes</p>
  <?php
  foreach ($repeats as $value) :
  ?>
  <p>(only shoes)</p>
  <?php
  endforeach;
  ?>
<?php
  $i++;
endwhile;
?>