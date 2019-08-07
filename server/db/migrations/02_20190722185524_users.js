exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('firstname')
    table.string('lastname')
    table.string('email')
    table.binary('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
