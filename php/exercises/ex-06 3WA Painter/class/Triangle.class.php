<?php
class Triangle extends Shape {

	private $points;

    public function __construct($pos1, $pos2, $pos3, $fill, $opacity)
	{
    	parent::__construct('', '', $fill, $opacity);

        $this->points = [$pos1, $pos2, $pos3];

	}
  public function getPoints() {
		return $this->points;
	}
}
?>
