import { db, models } from "@db";

export const usersResolver = async () => {
	try {
		const result = await db.select().from(models.users);
		return result;
	} catch (error) {
		console.error(error);
		throw new Error("Failed to fetch users");
	}
};
