<?php
session_start();

$template = 'add_post';

include 'application/bdd_connexion.php';

$query = $pdo->prepare
(
	'SELECT* FROM Author'
);

$query->execute();

$authors = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($authors);

$query = $pdo->prepare
(
	'SELECT* FROM Category'
);

$query->execute();

$categories = $query->fetchAll(PDO::FETCH_ASSOC);

//var_dump($category);

if(empty($_POST['title']) == false) {

    $title 				= $_POST['title'];
		$contents 		= $_POST['contents'];
    $author    	  = $_POST['author'];
    $category     = $_POST['category'];

		$query = $pdo->prepare
		(
			'INSERT INTO `Post`
			(`Title`,
				`Content`,
				`CreationDate`,
				`Author_Id`,
				`Category_Id`)
				VALUES (?,?,NOW(),?,?)'
		);

		$query->execute( [$title, $contents, $author, $category ] );

		header('Location: index.php');
    exit();
}

include 'layout.phtml';
?>
