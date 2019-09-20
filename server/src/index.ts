import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

async function start() {
  const app = express();

  app.get('/', (_request, response) =>
    response.json({
      message: `Application is running [${new Date()}]`
    })
  );

  const apolloServer = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String!
      }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hi, I am working'
      }
    }
  });

  apolloServer.applyMiddleware({ app });

  app.listen(4040, () => {
    console.log('[server] application running ...');
  });
}

start();
