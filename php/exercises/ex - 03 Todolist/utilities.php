<?php
function saveTask(array $taskData)
{
	$file = fopen('list.csv', 'a');

    fputcsv($file, $taskData);

    fclose($file);
}
function getTask()
{
  $tab = [];
  $file = fopen('list.csv', 'a+');

  while (true) {

    $taskData = fgetcsv($file);
    if ($taskData == false) {
      break;
    }
    array_push($tab, $taskData);
  }
  fclose($file);

  return $tab;
}

function saveTasks(array $tab)
{
	$file = fopen('list.csv', 'w');

    foreach($tab as $taskData)
	{
    	fputcsv($file, $taskData);
    }

    fclose($file);

}
?>
