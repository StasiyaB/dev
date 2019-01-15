<?php
session_start();

$template = 'login';


//var_dump($_SESSION);


    if (!empty($_POST)) {

      //var_dump($_POST);

      include 'application/bdd_connexion.php';
      $pdo->exec('SET NAMES UTF8');

      $query = $pdo->prepare
      	(
      	   'SELECT *
            FROM Users
            WHERE Mail = ?'
      	);

      	$query->execute( [ $_POST['Mail'] ] );
        $user = $query->fetch(PDO::FETCH_ASSOC);


      if( $user['Mail'] == $_POST['Mail'] && $user['Password'] == $_POST['Password'] ) {

        var_dump('connecté');

        $_SESSION['Mail'] = $user['Mail'];
        $_SESSION['Password'] = $user['Password'];
        $_SESSION['FirstName'] = $user['FirstName'];
        $_SESSION['LastName'] = $user['LastName'];
        $_SESSION['NickName'] = $user['NickName'];
        $_SESSION['Role']     = $user['Role'];


        //var_dump($_SESSION);
        header('Location: index.php');
      }
}
include 'layout.phtml';
?>
