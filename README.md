# Storefront Backend Project

This repo contains the backend application for an eCommerce store front. It is a RESTful API.

The database schema and and API route information can be found in the [requirements doc](REQUIREMENTS.md).

## Libraries Used

- Runtime: Node.js (TypeScript)
- Web application framework: Express
- Language: TypeScript
- Database: Postgres
- Testing: Jasmine and Supertest

## Project Setup

### Environment variables

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

### Install dependencies

```sh
npm install
```

### Start database server

```sh
docker-compose up -d
```

After running, the database server will be available on port ```5432```.

Default user and password of the database server is defined by ```POSTGRES_USER``` and ```POSTGRES_PASSWORD``` in ```.env```.

### Create the databases (if not exist)

```sh
npm run db-create:dev       // CREATE DATABASE udacity_fullsnackjs_dev
npm run db-create:test      // CREATE DATABASE udacity_fullsnackjs_test
```

### Migrate databases

```sh
npm run db-migrate:dev
npm run db-migrate:test
```

### Run the application up

```sh
npm run watch
```

After running, the application will be available on port ```3000```.

We can use Postman collection [udacity_fullsnack-js-2.postman_collection.json](./udacity_fullsnack-js-2.postman_collection.json) to test the APIs afterwards.

### Run the test suites

```sh
npm run test:windows    // for Windows OS
npm run test:linux      // for Linux OS
```

### Teardown

```sh
npm run db-reset:dev    // drop all tables in udacity_fullsnackjs_dev
npm run db-reset:test   // drop all tables in udacity_fullsnackjs_test
```

## API Endpoints

See [REQUIREMENTS.md](REQUIREMENTS.md) file.

## Database schema

See [REQUIREMENTS.md](REQUIREMENTS.md) file.
