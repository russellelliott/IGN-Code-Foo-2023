import supertest from 'supertest';
import * as http from 'http';

import * as db from '../db';
import app from '../../app';

let server: http.Server<
  typeof http.IncomingMessage,
  typeof http.ServerResponse
>;
let request: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  server = http.createServer(app);
  server.listen();
  request = supertest(server);
  return await db.reset();
});

afterAll((done) => {
  server.close(done);
  db.shutdown();
});

test('GET All Options', async () => {
  await request
    .post('/graphql')
    //.set('Authorization', 'Bearer ' + accessToken)
    .send({query: '{Poll { id, parent, data, votes }}'})
    .expect(200)
    .expect('Content-Type', /json/)
    .then((data) => {
      expect(data).toBeDefined();
      //expect(data.body).toBeDefined();
      //expect(data.body.data).toBeDefined();
    });
});

const queryString = `mutation{
    addPoll(input: "9742e392-8e06-406d-83d7-0e439acb1729"){
        id, parent, data, votes
    }
}`;

test('Vote for Star Trek', async () => {
  //const accessToken = await login.asMollyMember(request);
  await request
    .post('/graphql')
    //.set('Authorization', 'Bearer ' + accessToken)
    .send({query: queryString})
    .expect(200)
    .then((data) => {
      expect(data).toBeDefined();
      expect(data.body).toBeDefined();
      expect(data.body.id).toBeDefined();
      expect(data.body.parent).toBeDefined();
      expect(data.body.data).toBeDefined();
      expect(data.body.votes).toBeDefined();
    });
});