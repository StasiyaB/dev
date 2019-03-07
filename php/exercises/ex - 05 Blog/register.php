<?php
session_start();

include 'application/hash.php';

$template = 'register';
$error = false;
$emailErr = '';


if(empty($_POST) == false) {

  //var_dump($_POST);
  $hashPassword = password_hash($_POST['Password'], PASSWORD_DEFAULT);
  $email = $_POST['Mail'];


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

    if(!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL) === false) {

    $error = true;
    $emailErr = "Invalid email.";


} else {

  $query->execute( [ $_POST['FirstName'], $_POST['LastName'], $_POST['NickName'], $email, $hashPassword] );

  header('Location: login.php');
}
}
include 'layout.phtml';
?>
