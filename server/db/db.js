const connection = require('./connection')

const close = (db = connection) => {
  db.destroy()
}

const getAllMovies = (db = connection) => {
  return db('movies').then(movies => {
    return Promise.all(
      movies.map(movie => {
        return db('movie_tests')
          .select('test_type as testType', 'result')
          .where('movie_tests.movie_id', movie.id)
          .then(tests => {
            return {
              id: movie.id,
              title: movie.title,
              recommended: movie.recommended,
              apiMovieId: movie.API_movie_id,
              movieTests: tests,
              image: movie.image
            }
          })
      })
    )
  })
}

const getMovieById = (id, db = connection) => {
  return db('movies')
    .where('movies.id', id)
    .first()
    .then(movie => {
      return db('movie_tests')
        .select('test_type as testType', 'result')
        .where('movie_tests.movie_id', id)
        .then(tests => {
          return {
            id: movie.id,
            title: movie.title,
            recommended: movie.recommended,
            apiMovieId: movie.API_movie_id,
            movieTests: tests
          }
        })
    })
}

module.exports = {
  close,
  getMovieById,
  getAllMovies
}
