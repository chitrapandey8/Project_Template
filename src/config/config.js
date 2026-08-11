import { env } from "process";
import { dbconfig } from "./index";
import dotenv from 'dotenv';
dotenv.config();
const dfconfig = {
    development: {
        username: process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        test: process.env.DB_HOST,
        dialect : 'mysql'
    }
}
export default dfconfig;