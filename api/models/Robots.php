<?php

use Phalcon\Mvc\Micro;

$app = new Micro();

$app->get(
    '/api/robots',
    function () {
    }
);

$app->get(
    '/api/robots/search/{name}',
    function ($name) {
    }
);

$app->get(
    '/api/robots/{id:[0-9]+}',
    function ($id) {
    }
);

$app->post(
    '/api/robots',
    function () {
    }
);

$app->put(
    '/api/robots/{id:[0-9]+}',
    function ($id) {
    }
);

$app->delete(
    '/api/robots/{id:[0-9]+}',
    function ($id) {
    }
);

$app->handle(
    $_SERVER["REQUEST_URI"]
);
