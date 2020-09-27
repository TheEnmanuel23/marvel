import { createModule } from "graphql-modules";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const characterModule = createModule({
  id: "character-module",
  __dirname: __dirname,
  typeDefs,
  resolvers,
});
