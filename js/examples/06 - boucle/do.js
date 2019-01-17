
/*do {
	var name = window.prompt('nom');
	document.write('<p>'+name+'</p>');


} while(name != 'Jo');



document.write('<p>trouvé</p>')
*/
do {
	var number = parseFloat(window.prompt ('input the number'));

	document.write('<p>'+number+'</p>');

} while (number != 22.5);

document.write('<p>Correct!</p>')

/* CORRECTION*/
/*
'use strict';

var number;

do
{
	number = parseFloat(window.prompt('Veuillez saisir un nombre :'));


}
while(isNaN(number) == true );


document.write('<p>Merci, vous avez saisi <strong>' + number + '</strong>.</p>');

*/