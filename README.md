# Storefront Backend Project

## Setup

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

Run ```docker-compose up -d``` to run database server up on port 5432

Run ```npm run dev-db-up``` to create and migrate dev database named ```udacity_fullsnackjs_dev```

Run ```npm run test-db-up``` to create and migrate test database named ```udacity_fullsnackjs_test```

Run ```npm run watch``` to start application on port 3000

Run ```npm run test``` to run the test suite

Use Postman collection [udacity_fullsnack-js-2.postman_collection.json](./udacity_fullsnack-js-2.postman_collection.json) to test the APIs
