import request from 'supertest';
import app from '../src/app';

it('return 200 on get base url', async () => {
  return request(app).get('/').expect(200);
});
