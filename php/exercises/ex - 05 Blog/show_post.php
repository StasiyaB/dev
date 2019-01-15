<?php
session_start();

if(array_key_exists('id', $_GET) == false || ctype_digit($_GET['id']) == false) {
    header('Location: index.php');
    exit();
}

$template = 'show_post';

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT
        Post.Id,
        Title,
        Content,
        CreationDate,
        FirstName,
        LastName
  FROM Post
  INNER JOIN Author
  ON Post.Author_Id=Author.Id
  WHERE Post.Id = ?'
);

$query->execute(array($_GET['id'])); //id - is get from URL

$post = $query->fetch(PDO::FETCH_ASSOC);

//var_dump($post);

$query = $pdo->prepare
(
	'SELECT Pseudo, Contents
  FROM Comments
  WHERE Post_Id = ?'
);

$query->execute(array($_GET['id']));

$postComment = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($postComment);

include 'layout.phtml';
?>
