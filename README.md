# BairesDev Coding Challenge - Air Traffic Control System

Creation of a Air Traffic Controll System

## Requirements

Only [Docker Desktop](https://www.docker.com/products/docker-desktop) is required to run the solution


## Setup

On the terminal execute

```bash
docker-compose up -d
docker-compose exec api php artisan migrate
```

## Shutdown 

```bash
docker-compose down
```

## Test

To access the client application, open a browser in `http://localhost:3000`.

To access the API, open a browser in `http://localhost:8080/api/aircrafts`

## Explanation

For this solution 3 Docker containers where created:

- The API container. Which is based in PHP-Apache withe pdo, psr and Phalcon extensions compiled in
- The Client container. Which is based in Node with a client written in React
- The Database. Which is based in MariaDB

## Notes

- Tried to used [Phalcon](https://phalcon.io) for the API (you can see that in the [api Dockerfile](docker/api/Dockerfile#22) is actually compiled) but it I was getting an _Exception_ in the `Mvc\Micro` class.
- For the API I ended up using [Lumen](https://lumen.laravel.com/) which is less performing, but also, less prone to errors
- The project right now does not provide any kind of testing or values validation.
- For the client I used React
- The `client` container is just used only for development. For deployment it can be removed completelly.

