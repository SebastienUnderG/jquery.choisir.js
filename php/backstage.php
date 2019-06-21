<?php
require("connect.php");
$the_base = $_GET['base'];
?>

<!DOCTYPE html>
<html>

<script type="text/javascript">
    $(document).ready(function () {
        $(".btn_backstage").click(function () {
            var element = $(this);
            var the_base = element.attr("base");
            var the_statu = element.attr("statu");
            var this_id = element.attr("the_id");
            element.switchClass("btn-danger", "btn btn-raised btn-info", 500, "easeInOutQuad");
            element.text('Modification en cours');
            $.get("php/update.php", {id: this_id, statu: the_statu, base: the_base}).done(function (data) {
                var data_retour = $.trim(data);
                if (data_retour == "0") {
                    element.switchClass("btn-info", "btn btn-raised btn-primary", 500, "easeInOutQuad");
                    element.text('Reintegrate');
                    element.attr("statu", "0");
                } else if (data_retour == "1") {
                    element.switchClass("btn-info", "btn btn-raised btn-danger", 500, "easeInOutQuad");
                    element.text('Remove');
                    element.attr("statu", "1");
                } else {
                    alert("retour : " + data_retour);
                    element.switchClass("btn-info", "btn btn-raised btn-warning", 500, "easeInOutQuad");
                    element.text('ERREUR');
                }

            });

        });
    });


</script>

<body>


<table class="table table-hover">
    <thead>
    <tr>
        <th>#</th>
        <th>lastname</th>
        <th>firstname</th>
        <th>edit</th>
    </tr>
    </thead>
    <tbody>


    <?php
    $query = mysql_query("SELECT id,lastname,firstname FROM " . $the_base . " WHERE inbase = '1'");
    $numrows = mysql_num_rows($query);
    if ($numrows > 0) {
        while ($row = mysql_fetch_assoc($query)) {
            $list_id = $row['id'];
            $list_lastname = $row['lastname'];
            $list_firstname = $row['firstname'];
            echo '<tr>
								<th scope="row">' . $list_id . '</th>
								<td>' . $list_lastname . '</td>
								<td>' . $list_firstname . '</td>
								<td><button type="button" the_id="' . $list_id . '" statu="1" base="' . $the_base . '" class="btn_backstage btn btn-raised btn-danger">Remove</button></td>
							  </tr>';
        }
    }
    ?>
    <?php

    $query = mysql_query("SELECT id,lastname,firstname FROM " . $the_base . " WHERE inbase = '0'");
    $numrows = mysql_num_rows($query);
    if ($numrows > 0) {
        while ($row = mysql_fetch_assoc($query)) {
            $list_id = $row['id'];
            $list_lastname = $row['lastname'];
            $list_firstname = $row['firstname'];
            echo '<tr>
								<th scope="row">' . $list_id . '</th>
								<td>' . $list_lastname . '</td>
								<td>' . $list_firstname . '</td>
								<td><button type="button" the_id="' . $list_id . '" statu="0" base="' . $the_base . '" class="btn_backstage btn btn-raised btn-primary">Reintegrate</button></td>
							  </tr>';
        }
    }
    ?>

    </tbody>
</table>

</body>
</html>
