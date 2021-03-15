<?php
use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get('/', function() {
    return 'hola mundo';
});

$app->get( '/api/robots', function () {
    return 'robots';
});

$app->handle(
    $_SERVER["REQUEST_URI"]
);

