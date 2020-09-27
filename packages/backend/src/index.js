import { ApolloServer } from "apollo-server";
import { createApplication } from "graphql-modules";
import { charactersModule } from "./characters";
import { superagent } from "./utils/superagent";

const application = createApplication({
  modules: [charactersModule],
});

const PORT = process.env.PORT || 4000;

const schema = application.createSchemaForApollo();

const server = new ApolloServer({
  schema,
  context: {
    request: superagent,
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
