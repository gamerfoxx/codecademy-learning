<html>
<body>
<form method="GET">
Country:
<input name="country" type="text">
<br>
Language:
<input name="language" type="text">
<br>
<input type="submit" value="Submit">
</form>
<br>
<p>Your language is: <?=$_GET['language']; ?><!--Add step 3 code here--></p>
<p>Your country is: <?=$_GET['country']; ?><!--Add step 3 code here--></p>
<a href="index.php">Reset</a>
</body>
</html>