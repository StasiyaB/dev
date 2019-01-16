<?php
session_start();

$template = 'admin';
include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT
        Post.Id,
        Title,
        Content,
        FirstName,
        LastName,
        Category.Name
  FROM Post
  INNER JOIN Author
  ON Post.Author_Id=Author.Id
  INNER JOIN Category
  ON Category.Id=Post.Category_Id'
);

$query->execute();

$adminPost = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($adminPost);

$query = $pdo->prepare(
    'SELECT*
        FROM
           Category'
);

$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $pdo->prepare(
    'SELECT*
        FROM
           Author'
);

$query->execute();
$authors = $query->fetchAll(PDO::FETCH_ASSOC);
//var_dump($authors);


$query = $pdo->prepare(
    'SELECT*
        FROM
           Users'
);

$query->execute();
$users = $query->fetchAll(PDO::FETCH_ASSOC);

$template = 'admin';
include 'layout.phtml';

?>
