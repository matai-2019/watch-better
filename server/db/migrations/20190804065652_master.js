exports.up = knex => {
  // movies table
  return knex.schema.createTable('movies', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('API_movie_id')
    table.boolean('recommended')
    table.string('image')
    table.decimal('rating')
  })
    .then(() => {
    // movie_tests table
      return knex.schema.createTable('movie_tests', function (table) {
        table.increments('id').primary()
        table.string('test_type')
        table.boolean('result')
        table.integer('movie_id').references('movies.id').onUpdate('CASCADE').onDelete('CASCADE')
      })
    })
    .then(() => {
      // users table
      return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('firstname')
        table.string('lastname')
        table.string('email')
        table.binary('hash')
      })
    })
    .then(() => {
      // comments table
      return knex.schema.createTable('comments', table => {
        table.increments('id').primary()
        table.integer('movie_id').references('movies.id').onUpdate('CASCADE').onDelete('CASCADE')
        table.integer('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
        table.string('comment')
        table.integer('user_rating')
        table.datetime('created').defaultTo(knex.fn.now())
      })
    })
    .then(() => {
      // watchlist table
      return knex.schema.createTable('watchlist', table => {
        table.increments('id').primary()
        table.integer('movie_id').references('movies.id').onUpdate('CASCADE').onDelete('CASCADE')
        table.integer('user_id').references('users.id').onUpdate('CASCADE').onDelete('CASCADE')
      })
    })
    .then(() => {
      // seenlist table
      return knex.schema.createTable('seenlist', table => {
        table.increments('id').primary()
        table.integer('movie_id')
        table.integer('user_id')
      })
    })
}

exports.down = knex => {
  knex.schema.dropTable('movies')
    .then(() => knex.schema.dropTable('movie_tests'))
    .then(() => knex.schema.dropTable('users'))
    .then(() => knex.schema.dropTable('comments'))
    .then(() => knex.schema.dropTable('watchlist'))
    .then(() => knex.schema.dropTable('seenlist'))
}
