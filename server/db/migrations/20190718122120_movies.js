exports.up = knex =>
  knex.schema.createTable('movies', table => {
    table.increments('id').primary()
    table.string('title')
    table.integer('API_movie_id')
    table.boolean('recommended')
  })

exports.down = knex => knex.schema.dropTable('movies')
