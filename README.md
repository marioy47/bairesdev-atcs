# BairesDev Coding Challenge - Air Traffic Control System

Creation of a Air Traffic Controll System

## Requirements

[Docker Desktop](https://www.docker.com/products/docker-desktop)


## Setup

On the terminal:

```bash
docker-compose up -d
docker-compose exec api php artisan migrate
docker-compose exec client yarn build
```

## Shutdown 

```bash
docker-compose down
```

## Test

Open a browser to `http://localhost:8080`

## Notes

- Tried to used [Phalcon](https://phalcon.io) for the API (you can see that in the [api Dockerfile](docker/api/Dockerfile) is actually compiled) but it I was getting an _Exception_ in the `Mvc\Micro` class.
- For the API I ended up using [Lumen](https://lumen.laravel.com/) which is less performant, but also, less prone to errors
- To deliver faster, I didn't setted up any kind of testing or validation in botht the API and the Client
- For the client I used React
- The `client` container is just used to build the client. When `docker-compose up` is executed, that container starts and stop immedially since there are no running process in it.

