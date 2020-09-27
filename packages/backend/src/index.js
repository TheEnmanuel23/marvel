// import express from "express";
import { ApolloServer } from "apollo-server";
import { createApplication } from "graphql-modules";
import { charactersModule } from "./characters";

const application = createApplication({
  modules: [charactersModule],
});

const PORT = process.env.PORT || 4000;

const schema = application.createSchemaForApollo();

const server = new ApolloServer({ schema });

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
