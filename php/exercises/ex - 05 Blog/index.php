<?php
$template = 'index';

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT *
  FROM Post
  INNER JOIN Author
  ON Post.Author_Id=Author.Id'
);

$query->execute();

$titles = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($titles);

include 'layout.phtml';
 ?>
