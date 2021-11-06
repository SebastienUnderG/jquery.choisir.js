<?php
$server = "localhost";
$db_name = "lottery"; // Enter your database name
$db_user = "root"; // Enter your username
$db_pass = ""; // Enter your password

/*
foreach (get_loaded_extensions() as $i => $ext)
{
   echo $ext .' => '. phpversion($ext). '<br/>';
}
*/

mysql_connect($server, $db_user, $db_pass) or die("Could not connect to server!");
mysql_select_db($db_name) or die("Could not connect to database!");
mysql_query("SET NAMES UTF8");


?>
