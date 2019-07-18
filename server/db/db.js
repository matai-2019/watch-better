const config = require('./knexfile').development
const database = require('knex')(config)

// const connection = require('./connection')

const close = (db = database) => {
  db.destroy()
}

function getMovie (id, db = database) {
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
