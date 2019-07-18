const env = require('./test-environment')
const db = require('../../../../server/db/db')

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
      API_movie_id: 1,
      recommended: 'true'
    }
    expect(movie).toEqual(expected)
  })
}) // id changed from 1 to check if test fails and test still passing

test('db.getMovie returns all data for a specific movie', () => {
  db.getMovie(3, testDb).then(movie => {
    const expected = {
      movie_id: 3,
      title: 'Annihilation',
      recommended: 'true',
      testType: 'Bechdel Test',
      result: true
    }
    expect(movie).toEqual(expected)
  })
}) // id changed from 3 to check if test fails and test still passing
