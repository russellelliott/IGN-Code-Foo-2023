import dotenv from 'dotenv';
import app from './app';

dotenv.config();

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('Running Yoga GraphiQL server at http://localhost:4000/graphql');
});
