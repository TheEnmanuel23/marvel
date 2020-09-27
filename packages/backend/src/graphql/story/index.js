import { createModule } from "graphql-modules";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

export const storyModule = createModule({
  id: "story-module",
  __dirname: __dirname,
  typeDefs,
  resolvers,
});
