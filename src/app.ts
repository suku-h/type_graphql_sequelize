import * as bodyParser from 'body-parser'
import * as express from 'express'
import db from './models'
import resolvers from './resolvers'
import typeDefs from './typeDefs'
import { ApolloServer } from 'apollo-server-express'

const server = new ApolloServer({ typeDefs, resolvers, context: { db } });

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

server.applyMiddleware({ app })

db.sequelize.sync()
  .then(() => {
    app.listen({ port: 1331 }, () =>
      console.log(`🚀 Server ready at http://localhost:1331${server.graphqlPath}`),
    );
  })
