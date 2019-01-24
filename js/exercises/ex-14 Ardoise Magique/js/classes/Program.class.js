'use strict';

var Program = function(canvas)
{
		this.colorPalette = new ColorPalette();
		this.pen          = new Pen();
    this.canvas       = new Slate(this.pen, canvas);

	this.start();


}


Program.prototype.start = function() {
//1st action
	var penColor = document.querySelectorAll('.pen-color');

    for (var i = 0; i < penColor.length; i++) {

    	penColor[i].addEventListener('click', this.onClickPenColor.bind(this));

    }
//2nd action
	var penSize = document.querySelectorAll('.pen-size');

		for (var j = 0; j < penSize.length; j++) {

			penSize[j].addEventListener('click', this.onClicPenSize.bind(this));
		}

		var clearSlate = document.getElementById('tool-clear-canvas');
	   clearSlate.addEventListener('click', this.canvas.clear.bind(this.canvas));

		var paletteColor = document.getElementById('tool-color-picker');
	   paletteColor.addEventListener('click', this.colorPalette.appear.bind(this.colorPalette));
		 //console.log(paletteColor);

  	$(document).on('magical-slate:pick-color', this.onPickColor.bind(this));
}

Program.prototype.onPickColor = function()
{
console.log('bbb');
	var color = this.colorPalette.pickedColor;
	this.pen.color = 'rgb('+color.red+','+color.green+','+color.blue+')';

}
//1st action
Program.prototype.onClickPenColor = function(event) {

	var color = event.currentTarget.dataset.color;

	this.pen.color = color;

}
//2nd action
Program.prototype.onClicPenSize = function(event) {

	var size = event.currentTarget.dataset.size;

	this.pen.size = size;
}
