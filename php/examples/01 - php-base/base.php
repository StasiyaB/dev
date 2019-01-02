<?php

$name = 'Anastasiya';

var_dump($name);

echo 'Salut '.$name;

for ($i = 0; $i < 6; $i++) {
	
    echo '<p>Salut '.$name.'</p>';

}

if ($name == 'Paul') {

	echo 'Tu es Paul';
    
} else {

	echo 'Tu n\' es pas Paul';

}

function addition($num1, $num2) {
	
    $result = $num1 + $num2;
    return $result;

}

$result = addition(3, 5);

$tab = ['chien', 'chat', 'souris'];
echo '<p>'.$tab[1].'</p>';

$dico = [

	'name' => 'Robert',
	'age' => 23,
	'taille' => '1m85',
    'fumeur' => false
];

echo $dico['name'];

array_key_exists('name', $dico); // renvoie true si la clef existe ou sinon false
in_array('1m85', $dico);// renvoie true si la value existe ou sinon false

$dico['age']; // renvoie la value

include 'new.phtml';
include 'footer.phtml';

?>



