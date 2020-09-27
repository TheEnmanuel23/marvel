import { createModule, gql } from "graphql-modules";
import superagent from "superagent";
import querystring from "querystring";
import config from "../config";

export const charactersModule = createModule({
  id: "characters-module",
  __dirname: __dirname,
  typeDefs: gql`
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: async () => {
        const api = config.get("api");

        const params = querystring.stringify({
          apikey: api.publicKey,
          hash: api.hash,
          ts: 1,
        });

        const res = await superagent.get(
          `${api.url}/v1/public/characters?${params}`
        );

        console.log(res.body.data);

        return "Hello world!";
      },
    },
  },
});
