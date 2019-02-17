'use strict';

var TextShower = function (delay, thechnology, word) {
  console.log('text');

  this.delay = setTimeout(this.showText,  parseInt(delay)*1000);

this.thechnology = thechnology;
this.word = word;
}

TextShower.prototype.showText = function () {
  console.log('text9');

    this.shower  = document.getElementById(this.thechnology).innerHTML += this.word;
    console.log(this.word);
}
