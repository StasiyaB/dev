<?php
$base = [
	'dog' => 'chien',
	'cat' => 'chat',
	'milk' => 'lait',
	'cheese' => 'fromage',
	'honey' => 'miel'
];

if(array_key_exists('word', $_POST) == true)
{
		$word = $_POST['word'];
		$langage = $_POST['direction'];
	    var_dump($word);
	    var_dump($langage);

	if (array_key_exists($word, $base)) {
		  var_dump($base[$word]);

	}else {

	echo '<p>Je ne connais pas le mot '.'"'.$word.'"'.'</p>';

	}
	 /*	$string = "ABcD";
    strtolower($string); // change to lower case "abcd"*/
}

include "index.phtml";
?>
