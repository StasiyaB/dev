'use strict';
//create prototype programe which will instansified the actions of the persons
var Program = function() {

  this.tigrou = new Perso ('Tigrou',280, 45, 18, 160);

  this.winney = new Perso ('Winney', 300, 50, 7, 120);

  this.affichage();

  $('#attack').on('click', this.onClickAttack.bind(this));
  $('#defend').on('click', this.onClickDefend.bind(this));
  $('#leave').on('click', this.onClickLeave.bind(this));
}

Program.prototype.affichage = function() {

  if (this.tigrou.pv > 0 && this.winney.pv > 0) {
    $('#tigrou').text(this.tigrou.name+': '+this.tigrou.pv+'  attack : '+this.tigrou.pa+' defense : '+this.tigrou.pd+' magic : '+this.tigrou.pm);
    $('#winney').text(this.winney.name+': '+this.winney.pv+'  attack : '+this.winney.pa+' defense : '+this.winney.pd+' magic : '+this.winney.pm);

  } else {

    $('#commande').css('display', 'none');

      if (this.tigrou.pv > 0) {

        $('#affichage').html('<p>Victoire de : '+this.tigrou.name+'</p>');

      } else {
        $('#affichage').html('<p>Victoire de : '+this.winney.name+'</p>');
      }
  }
}

Program.prototype.onClickAttack = function(event) {

  event.preventDefault(); //prevent reloade page for the button

  this.tigrou.attack(this.winney);
  this.contre();
  this.affichage();
}

Program.prototype.onClickDefend = function(event) {

  event.preventDefault();

  this.tigrou.defend();
  this.contre();
	this.affichage();
}

Program.prototype.onClickLeave = function(event) {

  event.preventDefault();

  if (this.tigrou.pm >= 0) {

    this.tigrou.leave(this.winney);
    this.contre();
    this.affichage();

  } else {
      console.log('plus de points de magie, veuillez jouer autre chose');
  }
}

Program.prototype.contre = function() {

	var random = getRandomInteger(1, 3);

	if (random == 1) {

		this.tigrou.attack(this.winney);

	} else if (random == 2) {

    	this.tigrou.defend();

    } else {

    	if(this.tigrou.pm > 0) {

			this.tigrou.leave(this.winney);

		} else {

        	console.log('Plus de points de magie, on change de technique');

        	this.contre();
        }
    }
}
