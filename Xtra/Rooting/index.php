<?php


$requestUrl = $_SERVER['SCRIPT_NAME']; //http://10.10.109.52/sharecode/routing/index.php


if(empty($_GET) == true) {

	include 'controllers/home/homeController.class.php';

	$page = 'home';

} else if (array_key_exists('page', $_GET)){

	include 'controllers/'.$_GET['page'].'/'.$_GET['page'].'Controller.class.php';
	$page = $_GET['page'];

} else {

	echo 'url incorrect';
}


include 'www/layout.phtml';

?>
