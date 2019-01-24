<?php

include 'Time.class.php';
include 'Watch.class.php';

$time = new Time(14, 29, 44);

$time->showTime();

$minute = $time->getMinute();
$second = $time->getSecond();

echo '<br>' .$minute;
echo '<br>' .$second;

$time->setHour(12);

$hours = $time->getHour();
echo '<br>' .$hours;

$time->setMinute(21);

$minute = $time->getMinute();
echo '<br>' .$minute;


$time->setSecond(22);

$second = $time->getSecond();
echo '<br>' .$second;


$watch = new Watch(21, 18, 35, 2001);

var_dump($watch);

echo $watch->showTime();
/*var_dump($time->test);
var_dump($time->test2);*/
?>
