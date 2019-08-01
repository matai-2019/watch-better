
exports.up = function (knex, Promise) {
  return knex.schema.createTable('movie_tests', function (table) {
    table.increments('id').primary()
    table.string('test_type')
    table.boolean('result')
    table.integer('movie_id')
    table.foreign('movie_id').references('movies.id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('movie_tests')
}
