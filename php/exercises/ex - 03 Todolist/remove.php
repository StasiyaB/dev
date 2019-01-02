<?php
include 'utilities.php';

function removeTasks(array $allTasks, array $indexes)
{
	$tab = [];

    foreach($allTasks as $index => $value)
    {
    	if(in_array($index, $indexes) == false)
        {
        array_push($tab, $value);
        }

    }

    return $tab;
}

if(empty($_POST) == false) {

	var_dump($_POST["indexes"]);
  $allTasks = getTask();

  $tab = removeTasks($allTasks, $_POST['indexes']);
  var_dump($tab);
  saveTasks($tab);
}

header('Location: todolist.php');
exit();
?>
