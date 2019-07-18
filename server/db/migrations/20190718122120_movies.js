exports.up = knex =>
knex.schema.createTable('movies', table => {
  table.increments('id').primary()
  table.string('title')
  table.integer('external_movie_key')
  table.boolean('recommended')
})

exports.down = knex => knex.schema.dropTable('students')