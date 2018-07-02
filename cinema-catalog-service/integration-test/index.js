const supertest = require('supertest')

describe('movies-service', () => {
    const api = supertest('http://192.168.99.100:3333')

    it('returns a 200 for a collection of movies', (done) => {
        api.get('/cinemas/6/1')
        .expect(200, done)
    })
})