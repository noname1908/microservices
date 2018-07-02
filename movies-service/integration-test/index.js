const supertest = require('supertest')

describe('movies-service', () => {
    const api = supertest('http://192.168.99.100:3333')

    it('returns a 200 for a collection of movies', (done) => {
        api.get('/movies/premieres')
        .expect(200, done)
    })
})