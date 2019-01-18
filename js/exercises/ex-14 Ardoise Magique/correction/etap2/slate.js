//creer l'ardoise

var Slate = function (canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.currentLocation = null;
    this.isDrawing = false;
    this.pen = new Pen();


    this.canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseup', this.onMouseUp.bind(this));

}


Slate.prototype.getMouseLocation = function (event) {
    //pour touver la position a n'importe quel moment

    /* var location = {
        x: event.clientX,
        y: event.clientY */
    //permet de touver la position ou l'o est dans la fenetre

    var offset = this.canvas.getBoundingClientRect();
    //diffÃ©rence entre origine du site et origine du canvas

	var location = {
	    x: event.clientX - offset.left,
	    y: event.clientY - offset.top
	};//event.clientX ce trouve dans event il doit etres passer en commenatiare dans les fonction
    //determine la position du click dans le canvas par rapport Ã  son point d'origine =

    console.log(location);
    //donne en console log la position au click


}

Slate.prototype.onMouseDown = function (event) {

    console.log('coucou ');
    this.getMouseLocation(event);
    //determine la localisation au click

    this.isDrawing = true;
    //quasn on click le dessin debute donc isDrawing pass en true, il faut reppaser cettte var en flse quand on arret de clicker

}

Slate.prototype.onMouseMove = function (event) {
 	/* this.getMouseLocation(event); */
    //determine toutes les position lorque l'on bouge dans le canvas

    if (this.isDrawing == true) {
         this.getMouseLocation(event);
        //permet d'avoir la position uniquement quand on est en tain de clicker
    }
}

  Slate.prototype.onMouseUp = function (event) {
//fonction permetant d'arreter le dessin
      this.isDrawing = false;

  }
