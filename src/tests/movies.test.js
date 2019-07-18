const getMoviesFromAPI = require('../../server/routes/movies')

test('getSeasons returns all seasons', () => {
  return getMoviesFromAPI(550)
    .then((data) => {
      expect(data.rating).toEqual(8.4)
    })
})
