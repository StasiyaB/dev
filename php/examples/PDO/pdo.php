<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');
$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT * FROM offices WHERE officeCode=3'
);
$query->execute();

$offices = $query->fetchAll(PDO::FETCH_ASSOC);
/*$offices - the name of the variable where we will stock the db in question
fetchAll - all information in the table-associative
fetch - makes a unique table */
var_dump($offices);
?>
