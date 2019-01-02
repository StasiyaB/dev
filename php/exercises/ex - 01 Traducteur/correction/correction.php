<?php
$result = null;

$dictionary =
[
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil'
];

function translate($word, $direction, $dictionnary)
{
	switch($direction)
    {
        case 'toFrench':
        	if(array_key_exists($word, $dictionary) == true)
        	{
            	 $translatedWord = $dictionary[$word];

                 $message = "Le mot ".$word." se traduit par ".$translatedWord.".";

            } else {
            	$message = "Je ne connais pas le mot ".$word.".";
            }
        break;

        case 'toEnglish':
        	if(in_array($word, $dictionary) == true)
        	{
            	$translatedWord = array_search($word, $dictionary);
                $message = "Le mot ".$word." se traduit par ".$translatedWord.".";

            } else {
            	 $message = "Je ne connais pas le mot ".$word.".";
            }

        break;

        default:
        	$message = "Je ne sais traduire qu'en français et en anglais !";
        break;
      }

      return $message;

}
if(array_key_exists('word', $_POST) == true)
{
	//var_dump($_POST);
    $word = strtolower($_POST['word']);
    $direction = $_POST['direction'];
    $result = translate($word, $direction, $dictionnary);
}

include 'traducteur.phtml';

?>
