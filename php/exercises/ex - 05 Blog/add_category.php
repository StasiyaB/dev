<?php
 session_start();
 include 'application/bdd_connexion.php';

 if(empty($_POST) == false) {

 		$query = $pdo->prepare
 		(
 			'INSERT INTO Category
      (Name)
 			VALUES (?)'
 		);

 		$query->execute( [$_POST['Name']]);

 		header('Location: admin.php');
    exit();
 }
?>
