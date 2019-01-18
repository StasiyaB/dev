'use strict';

var Slate = function(canvas) {

		this.canvas          = canvas;
		this.context         = this.canvas.getContext('2d');
		this.currentLocation = null;
		this.isDrawing       = false;
		this.pen             = new Pen();

		this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
		this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
		this.canvas.addEventListener('mouseup', this.onMouseUpAndLeave.bind(this));
		this.canvas.addEventListener('mouseleave', this.onMouseUpAndLeave.bind(this));
}

Slate.prototype.getMouseLocation = function(event) {

	 var offset = this.canvas.getBoundingClientRect();

	 var location = {x: event.clientX - offset.left, y: event.clientY - offset.top};

	 console.log(location);
	 return location;
}

Slate.pototype.onMouseDown = function(event) {

		console.log('coucou ');
		this.currentLocation = this.getMouseLocation(event);

}

Slate.prototype.onMouseMove = function(event) {

	  var location = this.getMouseLocation(event);
	console.log('move');
}

Slate.prototype.onMouseUpAndLeave = function(event) {

	this.isDrawing = false;
}
