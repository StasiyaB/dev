<?php
include 'class/Shape.class.php';
include 'class/Rect.class.php';
include 'class/Square.class.php';
include 'class/Triangle.class.php';
include 'class/Circle.class.php';
include 'class/Ellipse.class.php';
include 'class/Program.class.php';

$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$square    = new Rectangle ('400', '200', '100', '100','deepskyblue', '0.5');
$circle    = new Circle ('300', '250', '180', 'gold', '0.33');
$ellipse   = new Ellipse ('600', '250', '40', '80', 'green', '0.75');
$triangle  = new Triangle ('60 60', '200 250', '60 250', 'purple', '0.75');

$prog = new Program($rectangle, $square, $circle, $ellipse, $triangle);


/*$sq   = $prog->drawSquare();
$rec  = $prog->drawRectangle();
$cerc = $prog->drawCircle();
$ell  = $prog->drawEllipse();
$tri  = $prog->drawTriangle();*/

$result = $prog->drawAll();
//var_dump($result);

/*var_dump($rec);
var_dump($sq);
var_dump($cerc);
var_dump($ell);
var_dump($tri);
*/

//var_dump($prog);

include 'layout.phtml';
?>
