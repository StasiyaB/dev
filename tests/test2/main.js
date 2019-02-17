

var canvas1 = new Canvas('canvas',"percent",  "RGBA(227,76,38,0.30)", '#e34c26', 90);
var canvas2 = new Canvas('canvas2',"percent2", "RGBA(0,112,187,0.30)", '#0070BB', 85);
var canvas3 = new Canvas('canvas3',"percent3", "RGBA(240,219,79,0.30)", '#f0db4f', 40);
var canvas4 = new Canvas('canvas4',"percent4", "RGBA(137,147,190,0.30)", '#8993be', 60);
var canvas5 = new Canvas('canvas5',"percent5", "RGBA(0,117,143,0.30)", '#00758F', 75);
console.log(canvas1);

canvas1.arcMove();
canvas2.arcMove();
canvas3.arcMove();
canvas4.arcMove();
canvas5.arcMove();

var text1 = new TextShower ('hidden', 1);

text1.showText();
