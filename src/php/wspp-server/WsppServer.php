<?php
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use Wspp\Chat;

$port = 8080;

echo "Loading required framework...\r\n";
require __DIR__ . '/../../../vendor/autoload.php';

echo "Starting WSPP Server...\r\n";
$server = IoServer::factory(new HttpServer(new WsServer(new Chat())), $port);

echo "Running Server...\r\n";
$server->run();


?>
