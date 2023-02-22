<?php

/* recupero file json */
$tasksString = file_get_contents('database.json');

/* aggiungo il decode per rendere l'array "valido" */
$tasks = json_decode($tasksString, true);


$response = [
    'success' => true,
    'message' => 'Ok',
    'code' => 200,
    'data' => $tasks
];

$jsontasks = json_encode($response);

// var_dump($jsontasks);

header('Content-type: application/json');

echo $jsontasks;
