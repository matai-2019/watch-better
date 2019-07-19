const env = require('./test-environment')
const db = require('../../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test.skip('db.getMovies returns an array of 10 movie objects', () => {
  const movies = db.getMovies(testDb)
  expect(movies).resolves.toHaveLength(10)
})

test.skip('db.getMovie returns a specific movie', () => {
  db.getMovie(1, testDb)
    .then(movie => {
      const expected = {
        id: 1,
        title: 'A Star is Born',
        API_movie_id: 'null',
        recommended: 'true'
      }
      expect(movie).toStrictEqual(expected)
    })
})
