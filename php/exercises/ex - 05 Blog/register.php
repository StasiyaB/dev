<?php
session_start();

include 'application/hash.php';

$template = 'register';


if(empty($_POST) == false) {

  //var_dump($_POST);
  $hashPassword = password_hash($_POST['Password'], PASSWORD_DEFAULT);

  include 'application/bdd_connexion.php';


	$pdo->exec('SET NAMES UTF8');

    	$query = $pdo->prepare
	(
	    'INSERT INTO Users
      (FirstName,
      LastName,
      NickName,
      Mail,
      Password,
      Role)
      VALUES (?, ?, ?, ?, ?, "user")'
	);

	$query->execute( [ $_POST['FirstName'], $_POST['LastName'], $_POST['NickName'], $_POST['Mail'], $hashPassword] );

  header('Location: login.php');

}
include 'layout.phtml';
?>
