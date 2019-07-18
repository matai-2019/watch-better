const connection = require('./connection')

const close = (db = connection) => {
  db.destroy()
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
  getMovie
}
