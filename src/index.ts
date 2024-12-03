import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphQl/schema";
import { resolvers } from "./graphQl/resolvers";

// Creating an instance of ApolloServer 
const server = new ApolloServer({ typeDefs, resolvers });

// Starting the server and listening on the port
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`Server running at ${url}`);
});