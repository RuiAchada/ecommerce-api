import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
	connectionString: process.env.DATABASE_URL,
});

//const client = new Client({
//	host: "127.0.0.1",
//	port: 5432,
//	user: "",
//	password: "",
//	database: "",
//});

export default async () => {
	await client.connect();
	const db = drizzle(client);
	return db;
};
