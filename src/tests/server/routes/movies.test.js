const request = require('supertest')
const server = require('../../../../server/server')
//const getMoviesFromAPI = require('../../../server/routes/movies')

test('tests work', () => {
  expect(true).toBeTruthy()
})

test('GET(\'/\')responds with status 200', (done) => {
  request(server)
    .get('/movie-api/')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test('GET(\'/\':id)responds with status 200', (done) => {
  request(server)
    .get('/movie-api/550')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
      done()
    })
})

test.skip('getSeasons returns all seasons', () => {
  return getMoviesFromAPI(550)
    .then((data) => {
      expect(data.rating).toEqual(8.4)
    })
})
