exports.up = knex =>
  knex.schema.createTable('watchlist', table => {
    table.increments('id').primary()
    table.integer('movie_id').references('movies.id')
    table.integer('user_id').references('users.id')
  })

exports.down = knex => knex.schema.dropTable('watchlist')
