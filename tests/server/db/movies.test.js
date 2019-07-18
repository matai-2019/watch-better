const env = require('./test-environment')
const db = require('../../../server/db/db')
// const movies = require('../../../server/db/seeds/movies')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getMovie returns a specific movie', () => {
  db.getMovie(1, testDb).then(movie => {
    const expected = {
      id: 1,
      title: 'A Star is Born',
      API_movie_id: 'null',
      recommended: 'true'
    }
    expect(movie).toEqual(expected)
  })
})
