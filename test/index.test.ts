import request from 'supertest';
import app from "../src/app";
describe('GET /api/test', () => {
    it('responds with a json message', (done) => {
        request(app)
            .get('/api/test')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, {
                "success": true,
                "message": "Calculation successful",
                "data": 4
            }, done);
    });
});

describe('GET /', () => {
    it('responds with a love message', (done) => {
        request(app)
            .get('/')
            .expect(200, "i love ayaka 😊", done);
    });
});