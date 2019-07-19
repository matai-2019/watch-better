const env = require('./test-environment')
const db = require('../../../../server/db/db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

test('db.getMovie returns all data for a specific movie', () => {
  const expected = {
    id: 1,
    title: 'A Star is Born',
    recommended: 'true',
    testType: 'Bechdel Test',
    result: 1
  }
  return db.getMovie(1, testDb).then(movie => {
    expect(movie[0]).toEqual(expected)
  })
})
