const db = require('../../../server/db/db')
// const movies = require('../../../server/db/seeds/movies')

const testDb = null

test('db.getMovie returns a specific movie', () => {
  const movie = db.getMovie(1, testDb)
  const expected = {
    id: 1,
    title: 'A Star is Born',
    API_movie_id: 'null',
    recommended: 'true'
  }
  return expect(movie).resolves.toEqual(expected)
    .catch(err => expect(err).toBeNull())
})
