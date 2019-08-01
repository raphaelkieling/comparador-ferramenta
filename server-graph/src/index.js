import { makeExecutableSchema } from "graphql-tools";
import { importSchema } from "graphql-import";
import { ApolloServer } from "apollo-server";
import path from "path";
import database from './models'
import resolvers from './modules/resolvers'

const typeDefs = importSchema(path.resolve(__dirname, "modules/schema.graphql"));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const server = new ApolloServer({
  schema,
  resolvers,
  dataSources: () => ({
    db: database.sequelize.models
  })
});

(async () => {
  await database.sequelize.sync({ force: false })

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})()
