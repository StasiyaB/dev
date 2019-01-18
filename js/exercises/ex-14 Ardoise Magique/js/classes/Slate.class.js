'use strict';

var Slate = function(canvas)
{
	  this.canvas          = canvas; // where is the action in HTML (var canvas = document.getElementById('slate');)
    this.context         = this.canvas.getContext('2d'); // how it (this.canvas = canvas;) will appear in HTML
    this.currentLocation = null; // the beginnig of the action
    this.isDrawing       = false; // by default there is no action
    this.pen             = new Pen(); // {color : 'black' , size : 1}

    this.canvas.addEventListener('mousedown',  this.onMouseDown.bind(this)); //give the beginning location
    this.canvas.addEventListener('mousemove',  this.onMouseMove.bind(this)); //change the location in moving
    this.canvas.addEventListener('mouseup',    this.onMouseUpAndLeave.bind(this)); // leave drowing bord
    this.canvas.addEventListener('mouseleave', this.onMouseUpAndLeave.bind(this)); // prevent to goout the bord of the canvas

}
/* If to write it in associative table:
Slate {canvas: canvas#slate.slate, context: CanvasRenderingContext2D, currentLocation: null, isDrawing: false, pen: Pen}
*/
Slate.prototype.getMouseLocation = function(event) {

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
