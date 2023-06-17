import { Pool } from "pg";
import configs from "./configs";

export const pool = (() => {
    const options = {
        user: configs.POSTGRES_USER,
        password: configs.POSTGRES_PASSWORD,
        host: configs.POSTGRES_HOST,
        port: 5432,
    }
    if (configs.NODE_ENV === 'test') {
        console.log(`DB: use 'test' profile`)
        console.log(configs.POSTGRES_TEST_DB)
        return new Pool({
            ...options,
            database: configs.POSTGRES_TEST_DB ?? ''
        })
    }
    console.log(`DB: use 'dev' profile`)
    return new Pool({
        ...options,
        database: configs.POSTGRES_DEV_DB ?? ''
    })
})()