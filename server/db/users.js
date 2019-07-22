const connection = require('./connection')
const { generateHash } = require('../auth')

function createUser ({ firstName, lastName, email, password }, db = connection) {

  return userExists(email, db)
    .then(exists => {
      if (exists) {
        return Promise.reject(new Error('User exists'))
      }
    })
    .then(() => generateHash(password))
    .then(passwordHash => {
      return db('users').insert({
        firstName,
        lastName,
        email,
        hash: passwordHash
      })
    })
}

function userExists (email, db = connection) {
  console.log(email)
  return db('users')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function getUserByName (email, db = connection) {
  return db('users')
    .select()
    .where('email', email)
    .first()
}

module.exports = {
  createUser,
  userExists,
  getUserByName
}
