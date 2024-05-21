export const typeDefs = `
  type User {
    id: Int
    fullName: String
    phone: String
  }

  type Query {
    hello: String
    users: [User]
  }
`;
