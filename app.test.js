const request = require('supertest');
const app = require('./app');

describe('base', () => {
    test('I am alive and responding', done => {
        request(app)
        .get('/')
        .expect(200)
        .end(done)
    });
    
    test('GET /', done => {
        request(app)
        .get('/about')
        .expect(200)
        .end(done)
    });
    
    test('GET jibberish', done => {
        request(app)
        .get('/asjdgajdsg')
        .expect(404)
        .end(done)
    });
});

describe('extra', () => {
    test('GET /users', done => {
        request(app)
        .get('/users')
        .expect(200)
        .end(done);
    });

    test('GET specific user', done => {
        request(app)
        .get('/user/1')
        .expect(200, '')
        .end(done);
    });

    test('DELETE a specific user', done => {
        request(app)
        .delete('/user/1')
        .expect(200, 'user deleted')
        .end(done);
    });

    test('POST a new user', done => {
        request(app)
        .post('/user')
        .expect(200, 'user created')
        .end(done);
    });
});
