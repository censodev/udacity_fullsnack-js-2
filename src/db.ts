import { Pool } from "pg";
import configs from "./configs";

const options = {
    user: configs.POSTGRES_USER,
    password: configs.POSTGRES_PASSWORD,
    host: configs.POSTGRES_HOST,
    database: '',
    port: 5432,
}

if (configs.NODE_ENV === 'dev') {
    options.database = configs.POSTGRES_DEV_DB ?? ''
}

if (configs.NODE_ENV === 'test') {
    options.database = configs.POSTGRES_TEST_DB ?? ''
}

export const pool = new Pool(options)