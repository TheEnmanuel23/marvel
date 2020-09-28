import { createModule } from "graphql-modules";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const commonModule = createModule({
  id: "common-module",
  __dirname: __dirname,
  typeDefs,
  resolvers,
});
