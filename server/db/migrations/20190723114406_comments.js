exports.up = (knex, Promise) => {
  return knex.schema.createTable('comments', table => {
    table.increments('id').primary()
    table.foreign('movie_id').references('movies.id')
    table.foreign('user_id').references('users.id')
    table.string('comment')
    table.integer('user_rating')
    table.datetime('created').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('comments')
}
