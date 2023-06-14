# Storefront Backend Project

## Setup

Run ```npm i``` at root folder to install dependencies

Create file ```.env``` with following properties:

```properties
POSTGRES_PRISMA_URL="postgres://default:PkUExAebv16J@ep-cold-fire-983412-pooler.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15"
POSTGRES_URL_NON_POOLING="postgres://default:PkUExAebv16J@ep-cold-fire-983412.ap-southeast-1.postgres.vercel-storage.com:5432/verceldb"
JWT_SECRET=qwertyuiopasdfghjklzxcvbnm1234567890!@$%^&*
```

Run ```npx prisma generate``` to generate Prisma Client code

Run ```npm run watch``` to start application on port 3000

Run ```npm run test``` to run the test suite

Use Postman collection [udacity_fullsnack-js-2.postman_collection.json](./udacity_fullsnack-js-2.postman_collection.json) to test the APIs
