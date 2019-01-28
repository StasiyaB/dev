<?php
class Circle extends Shape {

  private $radius;

  public function __construct($x, $y, $radius, $fill, $opacity) {

    parent::__construct($x, $y, $fill, $opacity);

      $this->radius = $radius;

    }
  public function getSize() {

    return ['radius' => $this->radius];

    }
}
?>
