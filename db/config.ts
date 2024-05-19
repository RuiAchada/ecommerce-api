import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

//const pool = new Pool({
//	host: "127.0.0.1",
//	port: 5432,
//	user: "",
//	password: "",
//	database: "",
//});

const db = drizzle(pool);
export default db;
