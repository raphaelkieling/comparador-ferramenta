import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";
import path from "path";

const typeDefs = importSchema(path.resolve(__dirname, "entitys/schema.graphql"));
const resolvers = {};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  resolvers: {}
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
