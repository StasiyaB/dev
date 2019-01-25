<?php

session_start();
include 'class/Database.class.php';
include 'class/User.class.php';


if (!empty($_POST)) {

	var_dump($_POST);

	$user = new User();
	$user->logUser($_POST);

	

		header('Location: index.php');

}

$template = 'login';
include 'layout.phtml';

?>
