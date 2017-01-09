<?php
require("connect.php");
    if( isset($_GET['id'])){
        $the_id = $_GET['id'];
        $the_base = $_GET['base'];
        mysql_query("UPDATE ". $the_base ." SET inbase = '0' WHERE id = ".$the_id.";");
    }
?>