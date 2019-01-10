<?php


include 'application/bdd_connexion.php';



if(empty($_POST) == false) {
		//var_dump($_POST);
    $nickName			= $_POST['nickName'];
		$contents  		= $_POST['contents'];
		$id 					= $_POST['postId'];
    //var_dump($nickName);
    //var_dump($contents);

		$query = $pdo->prepare
		(
			'INSERT INTO `Comments`
			( `Pseudo`,
        `CreationDate`,
				`Contents`,
				`Post_Id`)
				VALUES (?,NOW(),?,?)'
		);

		$query->execute( [$nickName	, $contents, $id] );

		header('Location: show_post.php?id='.$id);
    exit();
}
?>
