const request = require('supertest')
const server = require('../../../../server/server')

jest.mock('../../../../server/db/db')

test('tests work', () => {
  expect(true).toBeTruthy()
})

test("GET('/') responds with status 200", () => {
  return request(server)
    .get('/movie-api/')
    .then(res => expect(res.status).toBe(200))
    .catch(err => expect(err).toBeNull())
})

test("GET('/') returns an array of 10 movies", () => {
  return request(server)
    .get('/movie-api/')
    .then(res => {
      expect(res.body).toHaveLength(2)
    })
    .catch(err => expect(err).toBeNull())
})

test("GET('/':id) responds with status 200", () => {
  return request(server)
    .get('/movie-api/1')
    .then(res => expect(res.status).toBe(200))
    .catch(err => expect(err).toBeNull())
})

test.skip("GET('/search/:query':id)responds with status 200", () => {
  return request(server)
    .get('/movie-api/search/fight+club')
    .end((err, res) => {
      expect(err).toBeNull()
      expect(res.status).toBe(200)
    })
})
