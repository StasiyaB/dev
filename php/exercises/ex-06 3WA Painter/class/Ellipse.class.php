<?php
class Ellipse extends Shape {

  private $rx;
  private $ry;

  public function __construct($x, $y, $rx, $ry, $fill, $opacity) {

    parent::__construct($x, $y, $fill, $opacity);

      $this->rx = $rx;
      $this->ry = $ry;

    }
  public function getSize() {

    return [
      'rx' => $this->rx,
      'ry' => $this->ry
    ];

    }
}
?>
<!--
class Ellipse extends Circle {

	private $ry;

	public function __construct($x, $y, $rx, $ry, $fill, $opacity)
	{
		parent::__construct($x, $y, $rx, $fill, $opacity);
		$this->ry = $ry;
	}


	public function getEllipseSize() {
		return  $this->ry;
	}

}
-->
