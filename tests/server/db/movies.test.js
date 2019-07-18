const db = require('../../../server/db/db')
const moviesDb = require('../../../server/db/seeds/movies')

test('db.getMovie returns a specific movie', () => {
  const movie = db.getMovie(1, moviesDb)
  const expected = {
    id: 1,
    title: 'A Star is Born',
    API_movie_id: 'null',
    recommended: 'true'
  }
  return expect(movie).resolves.toEqual(expected)
    .catch(err => expect(err).toBeNull())
})
