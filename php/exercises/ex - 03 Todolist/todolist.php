<?php
include 'utilities.php';

$now = date_create();// let us be up to date when plan the tasks due to the date

$tab = getTask();

include 'index.phtml';
?>
