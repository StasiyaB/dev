'use strict';

var player;
var computer = getRandomInteger(1, 100);
console.log(computer);
function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}
do {
	player =parseFloat(window.prompt('Please input your number'));

	if (player > computer) {

		alert('It is less');
		
	}
	else if (player < computer) {

		alert('It is more');
	} 
	else {
		alert('You win');
	}

} while (player != computer)




















/*

function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}


function getRandomInteger(min, max) {


}

getRandomInteger(1, 50); // renvoie un entier aléatoire en 1 et 50

getRandomInteger(13, 26);// renvoie un entier aléatoire en 1 et 50
*/