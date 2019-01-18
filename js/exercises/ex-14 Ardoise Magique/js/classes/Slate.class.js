'use strict';

var Slate = function(canvas)
{
	  this.canvas          = canvas;
    this.context         = this.canvas.getContext('2d');
    this.currentLocation = null;
    this.isDrawing       = false;
    this.pen             = new Pen();

    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this)); //give the beginning location
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this)); //change the location in moving
    this.canvas.addEventListener('mouseup',    this.onMouseUpAndLeave.bind(this)); // leave drowing bord
    this.canvas.addEventListener('mouseleave', this.onMouseUpAndLeave.bind(this)); // prevent to goout the bord of the canvas

}

Slate.prototype.getMouseLocation = function(event)
{

	var offset = this.canvas.getBoundingClientRect();

  var location = { x: event.clientX - offset.left, y: event.clientY - offset.top };

    console.log(location);

  return location;
}


 Slate.prototype.onMouseDown = function(event) {

 	console.log('coucou ');

    this.currentLocation = this.getMouseLocation(event);

    this.isDrawing = true;
 }

 Slate.prototype.onMouseMove = function(event) {

    var location = this.getMouseLocation(event);

    if(this.isDrawing == true) {

        this.pen.configure(this.context);
        this.context.beginPath();
        this.context.moveTo(this.currentLocation.x, this.currentLocation.y);
        this.context.lineTo(location.x, location.y);
        this.context.stroke();

        this.currentLocation = location;
    }
 }

 Slate.prototype.onMouseUpAndLeave = function(event) {

   this.isDrawing = false;
 }
