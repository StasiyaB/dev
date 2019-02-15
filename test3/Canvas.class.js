var Canvas = function(canvas, span, colorRGB, colorHexa, rate) {

	this.can = document.getElementById(canvas),
    this.spanProcent = document.getElementById(span),
    this.c = this.can.getContext('2d');
 
  	this.posX = this.can.width / 2,
    this.posY = this.can.height / 2,
    this.fps = 20,
    this.procent = 0,
    this.oneProcent = 360 / 100,
    this.result = this.oneProcent * parseInt(rate);
  	this.colorRGB = colorRGB;
  	this.colorHexa = colorHexa
  	this.c.lineCap = 'round';
  	this.arcMove(this.c, this.can, this.procent, this.oneProcent, this.posX, this.posY, this.result, this.fps, this.spanProcent, this.colorRGB, this.colorHexa);
}


Canvas.prototype.arcMove = function(c, can, procent, oneProcent, posX, posY, result, fps, spanProcent, colorRGB, colorHexa) {
	var deegres = 0;
	var acrInterval = setInterval (function() {
    	deegres += 1;
    	c.clearRect( 0, 0, can.width, can.height );
      	procent = deegres / oneProcent;

        spanProcent.innerHTML = procent.toFixed();

      	c.beginPath();
      	c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
      	c.strokeStyle = colorRGB;
      	c.lineWidth = '10';
      	c.stroke();

      	c.beginPath();
      	c.strokeStyle = colorHexa;
      	c.lineWidth = '10';
      	c.arc( posX, posY, 70, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
      	c.stroke();
      if( deegres >= result ) clearInterval(acrInterval);
    }, fps);
    
}
  

