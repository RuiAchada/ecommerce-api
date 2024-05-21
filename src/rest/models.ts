import type { FastifyInstance } from "fastify";
import { type db as dbInstance, models } from "@db";

export const generateModelRoutes = (
	server: FastifyInstance,
	db: typeof dbInstance,
) => {
	for (const [modelName, modelSchema] of Object.entries(models)) {
		console.log("setting up route for model:", modelName);
		server.get(`/${modelName}`, async (request, reply) => {
			try {
				const result = await db.select().from(modelSchema);
				if (result.length === 0) {
					reply.code(404).send({ error: "No documents found" });
				} else {
					reply.send(result);
				}
			} catch (err) {
				reply.code(500).send({ error: err.message });
			}
		});
	}
};
