<?php
session_start();

if(!array_key_exists('id', $_GET) OR !ctype_digit($_GET['id'])){
            header('Location: admin.php');
            exit();
}

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'DELETE
  FROM Post
  WHERE Id = ?'
);

$query->execute(array($_GET['id']));

$query = $pdo->prepare
(
	'DELETE
  FROM Comments
  WHERE Post_Id = ?' //the name of the field of the table
);

$query->execute(array($_GET['id']));

header('Location: admin.php');

?>
