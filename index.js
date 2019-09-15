const express = require('express');
const graphqlHTTP = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { syncLoader } = require('./libs/loader');
const resolvers = require('./resolvers');

const graphQLSchema = syncLoader('./schema.graphql');
const typeDefs = [graphQLSchema];
const schema = makeExecutableSchema({ typeDefs, resolvers });

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
