'use strict';
//create prototype of the person
var Perso = function(name, pv, pa, pd, pm) {

  this.name = name;
  this.pv   = pv;
  this.pa   = pa;
  this.pd   = pd;
  this.pm   = pm;
}

Perso.prototype.attack = function(perso) {

	var degats = this.pa - perso.pd;

	if (degats < 10) {

		console.log(perso.name +'ne sent plus rien....' );
		degats = 10
	}
	perso.pv -= degats

  if  (perso.pv <= 0) {
		perso.pv = 0;
	}

	console.log(this.name +' Attaque, il enlève '+ degats + ' pv a '+ perso.name )

	console.log(perso.name +' a  '+ perso.pv+ ' pv' );
}


Perso.prototype.defend = function() {

		var ratio =  Math.round(this.pd * Math.random());

		console.log(this.name+' augmente sa defense de '+ ratio/2 + ' point ');

		this.pd += ratio/2;

		console.log(this.name +' a une defense à :'+ this.pd);
}


Perso.prototype.leave = function(perso) {

	if (this.pm > 0) {
		var degats = getRandomInteger(1, this.pm);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' pv a '+ perso.name);
		perso.pv -= degats;
		this.pm -=  degats;

		if  (perso.pv <= 0) {
			perso.pv = 0;
		}
		console.log(perso.name +' a  '+ perso.pv+ ' pv' );
	} else {
		console.log('Vous n avez plus de point de magie....')
	}

}
