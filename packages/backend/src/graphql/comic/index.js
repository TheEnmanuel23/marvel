import { createModule } from "graphql-modules";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const comicModule = createModule({
  id: "comic-module",
  __dirname: __dirname,
  typeDefs,
  resolvers,
});
