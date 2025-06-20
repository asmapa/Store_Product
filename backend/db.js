import pg from "pg"
import dotenv from "dotenv"

dotenv.config();

const db = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.on("error", (err) => {
    console.error("unexpected error occur......", err);
})

export const query = (text, params) => db.query(text, params);