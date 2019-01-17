'use strict';

var Circle = function() {

  this.color    = 'black';
  this.radius   = 10;
  this.position = {x:0, y:0};
}

Circle.prototype.setRadius = function(radius)
{
    this.radius = radius;
}

Circle.prototype.setColor = function(color)
{
    this.color = color;
}

Circle.prototype.setPosition = function(position){

    this.position = position;
}

Circle.prototype.draw = function(context)
{
	context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    context.fill();
}
