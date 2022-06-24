<html>
<body>
<!--Your code goes here-->
<?php 
echo "<p>{$_GET['firstNum']} added to {$_GET['secondNum']} is ";
print_r($_GET['firstNum'] + $_GET['secondNum']);
?>
<a href="index.php">Reset</a>
</body>
</html>