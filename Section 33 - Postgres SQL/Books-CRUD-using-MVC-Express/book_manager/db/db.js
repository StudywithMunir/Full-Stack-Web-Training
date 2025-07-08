import pg from "pg";
import dotenv from "dotenv";

// initializing the .env
dotenv.config();

// Destructuring the Pool class from the pg module
const { Pool } = pg;

// Creating a connection pool using environment variables from .env
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


// exporting the pool functionality
export default pool;