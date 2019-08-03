const moviesData = require('../../data/movies')
const movieTestsData = require('../../data/movie_tests')
const usersData = require('../../data/users')
const commentsData = require('../../data/comments')

exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(() => knex('movie_tests').del())
    .then(() => knex('users').del())
    .then(() => knex('comments').del())
    .then(() => knex('watchlist').del())
    .then(() => knex('seenlist').del())
    .then(() => knex('movies').insert(moviesData))
    .then(() => knex('movie_tests').insert(movieTestsData))
    .then(() => knex('users').insert(usersData))
    .then(() => knex('comments').insert(commentsData))
}
