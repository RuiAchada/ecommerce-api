// src/index.ts
import Fastify from "fastify";

const server = Fastify({ logger: true });

server.get("/", async (request, reply) => {
	return { hello: "world" };
});

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
