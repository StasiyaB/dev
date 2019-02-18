//objet ES5

var Perso = function(hp, force) {

	this.hp = hp;
    this.force = force;



}


Perso.prototype.attaquer(obj) {

	obj.hp -= this.force;

}


//objet ES6


class Personnage {

  constructor(hp, force) {

    this.hp = hp;
    this.force = force;

  }

  attasuer(obj) {

  	obj.hp -= this.force;

  }

}


var perso = new Perso(56, 5);

//fonction anonyme ES5


function (event) {

	event.preventDefault();
	console.log('coucou');

}

//fonction anonyme ES6


(event) => {

	event.preventDefault();
	console.log('coucou');

}

var button = document.getElemenById('valider');

button.addEventListener('click', (event) => {

												event.preventDefault();
												console.log('coucou');

											});



// concatenation ES5

var number = 3;

var string = 'Je possède '+number+' pommes';


// concatenation ES6

var number = 3;

var string = `Je possède ${number} pommes`;



// dev/www/js/function.js



export default function coucou() {
	alert('coucou');

}


// dev/www/class/Perso.js

class Personnage {

  constructor(hp, force) {

    this.hp = hp;
    this.force = force;

  }

  attasuer(obj) {

  	obj.hp -= this.force;

  }

}


export default Personnage;





// dev/index.js

import { coucou } from 'www/js/function';
import Personnage from 'www/class/Perso';


coucou();

var perso = new Perso(32, 12);

// https://ronanlevesque.fr/articles/les-principales-nouveautes-de-es6/ - recap of ES6
