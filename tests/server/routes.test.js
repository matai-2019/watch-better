const request = require('supertest')
const server = require('../../server/server')

test('tests work', () => {
  expect(true).toBeTruthy()
})

test('responds with status 200', (done) => {
  request(server)
    .get('/movie-api/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test('repsponds with status 200', (done) => {
  request(server)
    .get('/movie-api/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})
