import express from "express";
import path from "path";
import { ApolloServer, gql } from "apollo-server-express";

const app = express();

const PORT = process.env.PORT || 4000;
const isProd = process.env.NODE_ENV === "production";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  let url = `http://localhost:${PORT}${server.graphqlPath}`;
  console.log(`🚀 Server ready at ${url}`);
});
