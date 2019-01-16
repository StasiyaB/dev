<?php
 session_start();

 include 'application/bdd_connexion.php';

 $query = $pdo->prepare
 (
 	'SELECT* FROM Category'
 );

 $query->execute();

 $categories = $query->fetchAll(PDO::FETCH_ASSOC);

 //var_dump($categories);


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
