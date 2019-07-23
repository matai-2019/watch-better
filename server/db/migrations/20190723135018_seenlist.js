exports.up = knex =>
  knex.schema.createTable('seenlist', table => {
    table.increments('id').primary()
    table.integer('movie_id')
    table.integer('user_id')
  })

exports.down = knex => knex.schema.dropTable('seenlist')
