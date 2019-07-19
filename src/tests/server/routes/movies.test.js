const request = require('supertest')
const server = require('../../../../server/server')

test('tests work', () => {
  expect(true).toBeTruthy()
})

test('GET(\'/\') responds with status 200', (done) => {
  request(server)
    .get('/movie-api/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test('GET(\'/\') returns an array of 10 movies', (done) => {
  request(server)
    .get('/movie-api/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.header['content-length']).toBe('60')
      done()
    })
})

test('GET(\'/\':id) responds with status 200', (done) => {
  request(server)
    .get('/movie-api/550')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test('GET(\'/search/:query\':id)responds with status 200', (done) => {
  request(server)
    .get('/movie-api/search/fight+club')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})
