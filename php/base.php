<?php
require("connect.php");

$result = mysql_query("SHOW TABLES");
while($table = mysql_fetch_array($result)) {
    $arrayJSONofBASE['base'][] = $table[0];
    $arrayJSONofBASE['description'][] = $table[0];
}


echo json_encode($arrayJSONofBASE);
?>