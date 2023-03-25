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

const particularPoll = `query{
    Poll(input: "977d93a1-6d77-4523-bd46-755cda3ccdfc"){
        id, parent, data, votes
    }
}`;

test('GET Options from particular poll', async () => {
  await request
    .post('/graphql')
    //.set('Authorization', 'Bearer ' + accessToken)
    .send({query: particularPoll})
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
      expect(data.body.data.addPoll).toBeDefined();
      expect(data.body.data.addPoll.id).toBeDefined();
      expect(data.body.data.addPoll.parent).toBeDefined();
      expect(data.body.data.addPoll.data).toBeDefined();
      expect(data.body.data.addPoll.votes).toBeDefined();
    });
});