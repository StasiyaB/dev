'use strict';

var TextShower = function ( delay) {
  console.log('text');

  this.word  = document.getElementById('thechnology');
  //this.delay = delay;
  this.delay = setInterval(this.showText,  parseInt(delay)*1000);

  this.showText();
}

TextShower.prototype.showText = function () {
    console.log('text8');


if (this.delay == true) {
  this.word.addClass('hidden');

} else {

  clearInterval(this.delay);

}

}
