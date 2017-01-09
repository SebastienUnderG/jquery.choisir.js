<?php
require("connect.php");
    if( isset($_GET['base'])){
        $the_base = $_GET['base'];
        //lecteur de la base 
        $arrayJSONinBASE = array();

        $query = mysql_query("SELECT id,lastname,firstname,url FROM ". $the_base ." WHERE inbase = '1'");
        $numrows = mysql_num_rows($query);
        if($numrows>0){
            while( $row = mysql_fetch_assoc( $query ) ){
            $arrayJSONinBASE['id'][] = $row['id'];
            $arrayJSONinBASE['lastname'][] = $row['lastname'];
            $arrayJSONinBASE['firstname'][] = $row['firstname'];
            $arrayJSONinBASE['url'][] = $row['url'];
            }
        }
    }
echo json_encode($arrayJSONinBASE);
?>