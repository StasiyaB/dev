'use strict';

var Program = function() {
  this.tigrou = new Perso ('Tigrou',300, 50, 7, 120);

  this.winney = new Perso ('Winney', 280, 45, 18, 160);

  $('#attack').on('click', this.onClickAttaque.bind(this));
}

Program.prototype.onClickAttaque = function(event) {

  event.preventDefault();

	console.log(this.tigrou);
}
