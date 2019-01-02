<?php
const NUMBER_COUNT = 6;
const MIN_BOUND = 1;
const MAX_BOUND = 49;

$lotteryDraw = [];

function getLotteryDraw()
{
	$draw = [];
    $random;

    while( count($draw) < NUMBER_COUNT ){
    	do {


    		$random = rand(MIN_BOUND, MAX_BOUND);

        } while (in_array($random, $draw) == true);

    	array_push($draw, $random);

    }


    sort($draw);

    return $draw;

}

$lotteryDraw = getLotteryDraw();

include "loterie.phtml";
?>
