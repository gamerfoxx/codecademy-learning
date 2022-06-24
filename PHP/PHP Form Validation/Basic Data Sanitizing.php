<form method="post" action="">
Enter some HTML:
<br>
<input type="text" name="html">
<br>  
<input type="submit" value="Submit">
</form>
<div>
  You entered:
	<?= htmlspecialchars($_POST["html"]); ?> 
    <!-- Changes the input from basic HTML to text format ex &lt;p&gt;Hello World&lt;/p&gt; -->
</div>  