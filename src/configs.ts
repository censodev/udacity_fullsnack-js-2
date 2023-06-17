import dotenv from 'dotenv'

dotenv.config()

export default {
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DEV_DB: process.env.POSTGRES_DEV_DB,
    POSTGRES_TEST_DB: process.env.POSTGRES_TEST_DB,
    JWT_SECRET: process.env.JWT_SECRET ?? '',
    NODE_ENV: process.env.NODE_ENV ?? 'dev',
}