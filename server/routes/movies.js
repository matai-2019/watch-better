const express = require('express')
const request = require('superagent')

const db = require('../db/db')

const router = express.Router()
const apiUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = require('./apiKey')

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
