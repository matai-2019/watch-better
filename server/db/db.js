const connection = require('./connection')

const close = (db = connection) => {
  db.destroy()
}

function getMovies (db = connection) {
  return db('movies')
}

function getMovie (id, db = connection) {
  return db('movies')
    .where('movies.id', id)
    .first()
    .select(
      'movies.id',
      'movies.title',
      'movies.API_movie_id',
      'movies.recommended'
    )
}

module.exports = {
  close,
  getMovie,
  getMovies
}
