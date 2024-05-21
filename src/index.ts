// src/index.ts
import Fastify from "fastify";
import { db } from "@db";
import * as schema from "../db/schema";
import { generateModelRoutes } from "./rest/models";

const server = Fastify({ logger: true });

generateModelRoutes(server, db);

const start = async () => {
	try {
		/* 
      Fastify, by default, binds to 127.0.0.1 (localhost), which means the server only listens to the loopback interface (only accessible from within the container if ran in Docker).
      On the other hand, binding the server to the 0.0. 0.0 interface means it accepts traffic from all of the available interfaces.
    */
		await server.listen({ port: 3000, host: "0.0.0.0" });
		console.log(`Server is listening on http://localhost:3000`);
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
};

start();
