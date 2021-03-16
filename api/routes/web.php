<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/version', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix' => ''], function() use ($router) {

    $router->get('aircrafts', ['uses' => 'AircraftController@showAll']);
    $router->get('aircrafts/{id}', ['uses' => 'AircraftController@showOne']);
    $router->post('aircrafts', ['uses' => 'AircraftController@create']);
    $router->delete('aircrafts/{id}', ['uses' => 'AircraftController@delete']);
    $router->put('aircrafts/{id}', ['uses' => 'AircraftController@update']);

});
