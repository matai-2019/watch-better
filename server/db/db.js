const config = require('./knexfile').development
const database = require('knex')(config)

const close = (db = database) => {
  db.destroy()
}

module.exports = {
  close
}
