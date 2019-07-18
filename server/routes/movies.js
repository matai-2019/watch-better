const express = require('express')
const request = require('superagent')

const router = express.Router()
const apiUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = require('./apiKey')

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

router.get('/', (req, res) => {
  db.getMovies()
    .then(movies => res.status(200).send(movies))
    .catch(err => res.send(err.message))
})

const getMoviesFromAPI = (id) => {
  return request.get(`${apiUrl}${id}?api_key=${apiKey}&language=en-US`).then(({ body }) => {
    return {
      releaseDate: body.release_date,
      description: body.overview,
      rating: body.vote_average,
      genres: body.genres
    }
  }).then(movie => {
    return request.get(`${apiUrl}${id}/credits?api_key=${apiKey}`).then(({ body }) => {
      movie.cast = body.cast
      return movie
    })
  })
}

module.exports = router
