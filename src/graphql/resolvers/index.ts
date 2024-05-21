import { usersResolver } from "./users";

export const resolvers = {
	Query: {
		hello: () => "Hello world!",
		users: usersResolver,
	},
};
