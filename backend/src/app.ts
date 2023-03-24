import dotenv from 'dotenv';
dotenv.config();
import express, {Express} from 'express';

import path from 'path';
import {createYoga} from 'graphql-yoga';
import 'reflect-metadata'; // must come before buildSchema
import {buildSchema} from 'type-graphql';

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [__dirname + '/**/resolver.{ts,js}'],
    validate: true,
    emitSchemaFile: {
      path: path.resolve(__dirname, '../build/schema.gql'),
      commentDescriptions: true,
    },
  });

  const yoga = createYoga({
    schema,
    graphiql: true,
  });

  app.use('/graphql', yoga);
}
bootstrap();

export default app;
