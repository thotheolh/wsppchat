<?php
use Ratchet\Server\IoServer;
use Chat;

$port = 8080;

echo "Loading required framework...";
require __DIR__ . '/../../../vendor/autoload.php';

echo "Starting WSPP Server...\r\n";
$server = IoServer::factory(new Chat(), $port);

echo "Running Server...\r\n";
$server->run();


?>
