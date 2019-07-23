const request = require('supertest')
const server = require('../../../../server/server')

jest.mock('../../../../server/db/db')

describe('Route tests', () => {
  it('tests work', () => {
    expect(true).toBeTruthy()
  })

  it("GET('/') responds with status 200", () => {
    return request(server)
      .get('/movie-api/')
      .then(res => expect(res.status).toBe(200))
      .catch(err => expect(err).toBeNull())
  })

  it("GET('/') returns an array of 10 movies", () => {
    return request(server)
      .get('/movie-api/')
      .then(res => {
        expect(res.body).toHaveLength(2)
      })
      .catch(err => expect(err).toBeNull())
  })

  it("GET('/':id) responds with status 200", () => {
    return request(server)
      .get('/movie-api/1')
      .then(res => expect(res.status).toBe(200))
      .catch(err => expect(err).toBeNull())
  })

  it("GET('/search/:query':id)responds with status 200", () => {
    return request(server)
      .get('/movie-api/search/fight+club')
      .end((err, res) => {
        expect(err).toBeNull()
        expect(res.status).toBe(200)
      })
  })

  it("GET('/comments/:id') responds with status 200", () => {
    return request(server)
      .get('/movie-api/comments/2')
      .end((err, res) => {
        expect(err).toBeNull()
        expect(res.status).toBe(200)
      })
  })

  it("DELETE('/comment/:id') responds with status 200", () => {
    return request(server)
      .delete('/movie-api/comment/1')
      .end((err, res) => {
        expect(err).toBeNull()
        expect(res.status).toBe(200)
      })
  })
})
