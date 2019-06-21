<?php

if (isset($_GET['id'])) {
    require("connect.php");
    $the_id = $_GET['id'];
    $the_inbase = $_GET['statu'];
    $the_base = $_GET['base'];
    //lecteur de la base
    $query = mysql_query("SELECT inbase FROM " . $the_base . " WHERE id = '" . $the_id . "'");
    $numrows = mysql_num_rows($query);
    if ($numrows > 0) {
        while ($row = mysql_fetch_assoc($query)) {
            $verif_inbase = $row['inbase'];
        }
    }


    if ($verif_inbase == $the_inbase) {

        if ($the_inbase == 1) {

            mysql_query("UPDATE " . $the_base . " SET inbase = '0' WHERE id = " . $the_id . ";");

        } else if ($the_inbase == 0) {

            mysql_query("UPDATE " . $the_base . " SET inbase = '1' WHERE id = " . $the_id . ";");

        } else {
            echo "ERROR INBASE";
        }

    } else {
        echo "ERROR COHERANCE";
    }

} else {
    echo "ERROR ID";
}

$query = mysql_query("SELECT inbase FROM " . $the_base . " WHERE id = '" . $the_id . "'");
$numrows = mysql_num_rows($query);
if ($numrows > 0) {
    while ($row = mysql_fetch_assoc($query)) {
        $verif_inbase_retour = $row['inbase'];
    }
}

echo trim($verif_inbase_retour);
?>



