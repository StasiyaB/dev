'use strict';

var canvas = document.getElementById("masterpiece");

var context = canvas.getContext('2d');

function onClickCanvas(event) {

  var offset = canvas.getBoundingClientRect();
  /*var style = window.getComputedStyle(canvas);
  var border = parseInt(styles.borderWidth);*/

	var location = {  x: event.clientX - offset.left - 20/*border*/ , y: event.clientY - offset.top - 20/*border*/ }

	var circle = new Circle();

  circle.setRadius(getRandomInteger(10,100));
  circle.setPosition(location);
  circle.setColor(getRandomColor());

  circle.draw(context);
}

canvas.addEventListener('click', onClickCanvas);
