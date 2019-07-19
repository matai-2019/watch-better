const express = require('express')
const router = express.Router()

const { findMovieFromAPI, getMoviesFromAPI } = require('./routeHelpers')

const db = require('../db/db')

router.get('/:id', (req, res) => {
  const { id } = req.params
  getMoviesFromAPI(id)
    .then(movie => res.json(movie))
    .catch(err => {
      res.status(500).send('Consuming TMDB failed')
      console.error(err)
    })
})

router.get('/search/:query', (req, res) => {
  const { query } = req.params
  findMovieFromAPI(query)
    .then(movie => res.send(movie))
    .catch(err => {
      res.status(500).send('Consuming TMDB failed')
      console.error(err)
    })
})

router.get('/', (req, res) => {
  db.getMovies()
    .then(movies => res.status(200).send(movies))
    .catch(err => res.send(err.message))
})

module.exports = router
