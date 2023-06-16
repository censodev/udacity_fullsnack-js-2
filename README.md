# Storefront Backend Project

## Setup

Run ```npm i``` at root folder to install dependencies

Create file ```.env``` with following properties:

```properties
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=udacity_fullsnackjs
```

Run ```docker-compose up -d``` to run database up

Run ```npx db-migrate up``` to migrate database

Run ```npm run watch``` to start application on port 3000

Run ```npm run test``` to run the test suite

Use Postman collection [udacity_fullsnack-js-2.postman_collection.json](./udacity_fullsnack-js-2.postman_collection.json) to test the APIs
