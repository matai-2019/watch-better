const express = require('express')
const request = require('superagent')

const db = require('../db/db')

const router = express.Router()
const apiUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = process.env.API_KEY

const getMoviesFromAPI = (id) => {
  return request.get(`${apiUrl}${id}?api_key=${apiKey}&language=en-US`).then(movie => {
    return {
      
    }
    }
  })
}


module.exports = router
