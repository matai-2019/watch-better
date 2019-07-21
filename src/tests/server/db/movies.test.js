const env = require('./test-environment')
const db = require('../../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test.skip('db.getMovieById returns all data for a specific movie', () => {
  const expected = {
    id: 1,
    title: 'Bad Moms',
    recommended: 1,
    apiMovieId: 376659,
    movieTests: [
      {
        testType: 'Bechdel Test',
        result: 1
      },
      {
        testType: 'Rees Davies Test',
        result: 0
      },
      {
        testType: 'Ko Test',
        result: 1
      },
      {
        testType: 'Landau Test',
        result: 1
      },
      {
        testType: 'Feldman Test',
        result: 0
      }
    ]
  }
  return db.getMovieById(1, testDb).then(movie => {
    expect(movie).toEqual(expected)
  })
})

test('db.getMovies returns an array of 49 movie objects', () => {
  return db.getAllMovies(testDb).then(movies => {
    expect(movies).toHaveLength(49)
  })
})
