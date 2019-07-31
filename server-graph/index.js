const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const path = require('path')

const resolvers = {
    Query: {
        items: () => sampleItems,
    },
}

const options = { port: 4000, endpoint: "/graphql" }

const server = new GraphQLServer({
    typeDefs: importSchema(path.resolve(__dirname, './schema.graphql')),
    resolvers
})

server.start(options, () => {
    console.log('Server is running on localhost:' + options.port)
})