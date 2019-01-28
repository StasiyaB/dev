<?php
class Program {
	private $rectangle;
  private $square;
  private $circle;
  private $ellipse;
  private $triangle;

    public function __construct(Rectangle $rectangle, Rectangle $square, Circle $circle, Ellipse $ellipse, Triangle $triangle) {

    	$this->rectangle  = $rectangle;
      $this->square     = $square;
      $this->circle     = $circle;
      $this->ellipse    = $ellipse;
      $this->triangle   = $triangle;
    }

	  public function drawRectangle() {
  		  $size = $this->rectangle->getSize(); // ['width' =>200,'height' => 100];
      	$position = $this->rectangle->getPosition();
  		  $style = $this->rectangle->getStyle();

      	return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
    }

    public function drawSquare() {
        $size = $this->square->getSize();
        $position = $this->square->getPosition();
        $style = $this->square->getStyle();

        return '<rect x="'.$position['x'].'" y="'.$position['y'].'" width="'.$size['width'].'" height="'.$size['height'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></rect>';
      }
    public function drawCircle() {
        $size = $this->circle->getSize();
        $position = $this->circle->getPosition();
        $style = $this->circle->getStyle();

        return '<circle cx="'.$position['x'].'" cy="'.$position['y'].'" r ="'.$size['radius'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></circle>';
      }
    public function drawEllipse() {
        $size = $this->ellipse->getSize();
        $position = $this->ellipse->getPosition();
        $style = $this->ellipse->getStyle();

        return '<ellipse cx="'.$position['x'].'" cy="'.$position['y'].'" rx ="'.$size['rx'].'" ry ="'.$size['ry'].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></ellipse>';
      }

    public function drawTriangle() {
   		$points = $this->triangle->getPoints();
  	  $style = $this->triangle->getStyle();

      return '<polygon points="'.$points[0].', '.$points[1].', '.$points[2].'" fill="'.$style['fill'].'" opacity="'.$style['opacity'].'"></polygon>';

 }
   public function drawAll() {
     	  $result = [];
        array_push( $result, $this->drawRectangle() );
    	  array_push( $result, $this->drawSquare() );
    	  array_push( $result, $this->drawCircle() );
    	  array_push( $result, $this->drawTriangle() );
        array_push( $result, $this->drawEllipse() );

        return $result;
     }
}
?>
