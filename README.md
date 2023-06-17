# Storefront Backend Project

This repo contains the backend application for an eCommerce store front. It is a RESTful API.

The database schema and and API route information can be found in the [requirements doc](REQUIREMENTS.md).

## Libraries used

- Runtime: Node.js (TypeScript)
- Web application framework: Express
- Language: TypeScript
- Database: Postgres
- Testing: Jasmine and Supertest

## Installation Instructions

Run ```npm i``` at root folder to install dependencies

Create file ```.env``` with following properties:

```properties
NODE_ENV=dev
POSTGRES_HOST=localhost
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DEV_DB=udacity_fullsnackjs_dev
POSTGRES_TEST_DB=udacity_fullsnackjs_test
JWT_SECRET=qwertyuiopasdfghjklzxcvbnm1234567890!@$%^&*
```

Run ```docker-compose up -d``` to start database server up

### Ports

- Application runs on port ```3000```
- Database server runs on port ```5432```

### Dev mode

Run ```npm run db-create:dev``` to create dev database named ```udacity_fullsnackjs_dev```

Run ```npm run db-migrate:dev``` to migrate dev database

Run ```npm run watch``` to start application up

Use Postman collection [udacity_fullsnack-js-2.postman_collection.json](./udacity_fullsnack-js-2.postman_collection.json) to test the APIs

Run ```npm run db-reset:dev``` to reset dev database

### Test mode

Run ```npm run db-create:test``` to create test database named ```udacity_fullsnackjs_test```

Run ```npm run db-migrate:test``` to migrate test database

Run ```npm run test:windows``` to run the test suite on Windows OS or ```npm run test:linux``` to run on Linux OS

Run ```npm run db-reset:test``` to reset test database
