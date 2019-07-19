const connection = require('./connection')

const close = (db = connection) => {
  db.destroy()
}

function getMovies (db = connection) {
  return db('movies')
}

function getMovie (id, db = connection) {
  return db('movies')
    .join('movie_tests', 'movies.id', 'movie_tests.movie_id')
    .where('movies.id', id)
    .select(
      'movies.id',
      'movies.title',
      'movies.recommended',
      'movie_tests.test_type as testType',
      'movie_tests.result'
    )
}

module.exports = {
  close,
  getMovie,
  getMovies
}
