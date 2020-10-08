# TYPESCRIPT CMS

## REST API

1. Node.JS
2. Express JS
3. TypeORM
4. MySQL

- This REST API server provides secure access to its endpoints via middleware role management. 

## REACT JS

1. Out of the box react app to consume the REST API services

## Install
run the following docker compose command (requires docker)
```$ docker-compose up --build```

Go to the /api and run npm install
```
$ cd api
api $ npm install
```

Go to the /client and run npm install
```
$ cd ../client
client $ npm install
```

You should be able to access the API server at ```localhost:4000/api``` from your browser.

To run tests: 
1. Build the Docker container for the API (or look in your docker containers and locate it)
``` 
api$ docker build -t api --build-arg VERSION=$MY_COMPONENT_VERSION -f Dockerfile.production . 
```
2. Build the test container and run it
```
api$ docker build -t api-test -f Dockerfile.tests .
api$ docker run -rm api-test
```
