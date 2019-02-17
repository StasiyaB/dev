'use strict';

var Canvas = function(canvas, percent, rgb, hexa, rate) {

  this.can         = document.getElementById(canvas),
  this.spanPercent = document.getElementById(percent),
  this.c           = this.can.getContext('2d');
  this.rgb         = rgb;
  this.hexa        = hexa

  this.posX       = this.can.width / 2,
  this.posY       = this.can.height / 2,
  this.fps        = 1000 / 200,
  this.percent    = 0,
  this.onePercent = 360 / 100,
  this.result     = this.onePercent * parseInt(rate);

  this.c.lineCap = 'round';
  this.arcMove(this.c, this.can , this.posX, this.posY, this.percent, this.onePercent, this.result, this.can.width,this.can.height, this.spanPercent, this.fps, this.rgb, this.hexa);
}

Canvas.prototype.arcMove = function(c, can, posX, posY, percent, onePercent, result, width, height, spanPercent, fps, rgb, hexa) {

      var deegres = 0;
      var acrInterval = setInterval (function() {

        deegres +=1;

        c.clearRect( 0, 0, can.width, can.height );

        percent = deegres / onePercent;

        spanPercent.innerHTML = percent.toFixed();

        c.beginPath();
        c.arc( posX, posY, 40, (Math.PI/180) * 270, (Math.PI/180) * (270 + 360) );
        c.strokeStyle = rgb;
        c.lineWidth = '8';
        c.stroke();

        c.beginPath();
        c.strokeStyle = hexa;
        c.lineWidth = '8';
        c.arc( posX, posY, 40, (Math.PI/180) * 270, (Math.PI/180) * (270 + deegres) );
        c.stroke();

        if( deegres >= result ) clearInterval(acrInterval);

        }, fps);

}
