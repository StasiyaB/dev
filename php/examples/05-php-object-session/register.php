<?php
session_start();
include 'class/Database.class.php';
include 'class/User.class.php';

if(empty($_POST) == false) {

    var_dump($_POST);

    $user = new User();

    $user->addUser($_POST);

    header('Location: login.php');
    var_dump($newUser);
}

$template = 'register';
include 'layout.phtml';
?>
