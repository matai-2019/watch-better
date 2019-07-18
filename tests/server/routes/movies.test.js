const blah = require('../../../server/routes/movies')

test('getSeasons returns all seasons', () => {
  return blah.getMoviesFromAPI(550)
    .then(({ body }) => {
      expect(body.id).toEqual(550)
    })
})
