import { ApolloServer } from "apollo-server";
import { createApplication } from "graphql-modules";
import { superagent } from "./utils/superagent";

import { characterModule } from "./graphql/character";
import { comicModule } from "./graphql/comic";
import { storyModule } from "./graphql/story";
import { commonModule } from "./graphql/common";

const application = createApplication({
  modules: [commonModule, characterModule, comicModule, storyModule],
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
