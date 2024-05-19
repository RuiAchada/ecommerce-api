import { defineConfig } from "drizzle-kit";

export default defineConfig({
	schema: "./db/schema/*",
	out: "./db/migrations",
	dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
	dbCredentials: {
		url: process.env.DATABASE_URL || "postgres://localhost:5432",
		//user: process.env.POSTGRES_USER,
		//password: process.env.POSTGRES_PASSWORD,
		//host: "127.0.0.1",
		//port: 5432,
		//database: process.env.POSTGRES_DB || "db",
	},
});
