<?php
header('Content-Type: application/json');
// 1. recupero il file database json
$tasksString = file_get_contents('database.json');

// 2. metto il Decode per renderlo un array associativo
$tasks = json_decode($tasksString, true);

$newTask = [
    'task' => $_POST['task'],
    'done' => false,
];

$tasks[] = $newTask;


// 3. aggiungo la nuova task dell array del database

// $tasks[] = $_POST['task'];

$encodedTask = json_encode($tasks);

file_put_contents('database.json', $encodedTask);

header('Content-Type: application/json');

echo json_encode($tasks);
