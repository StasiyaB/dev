<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', '');
$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT* FROM orders'
);

$query->execute();

$orders = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($orders);

include 'table.phtml';
?>
