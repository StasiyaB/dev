<?php

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'DELETE
  FROM Post
  WHERE Id = ?'
);

$query->execute(array($_GET['id']));

header('Location: admin.php');

?>
