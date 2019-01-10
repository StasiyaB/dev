<?php

$template = 'edit_post';

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT
        Id
        Title,
        Content
  FROM Post
  WHERE Id = ?'
);

$query->execute(array($_GET['id'])); //id - is get from URL

$editPost = $query->fetch(PDO::FETCH_ASSOC);

var_dump($editPost);

if (empty($_POST)== false){
  $query = $pdo->prepare
  (
    'UPDATE Post
     SET Title = ?,
         Content = ?
    WHERE Id = ?'
  );
  $query->execute(array($_POST['title'], $_POST['contents'], $_GET['id']));
  header('Location: admin.php');
  exit();
}
include 'layout.phtml';
?>
