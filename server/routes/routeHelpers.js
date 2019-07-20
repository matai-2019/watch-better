const request = require('superagent')
const apiUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = require('./apiKey')

const findMovieFromAPI = (query) => {
  return request
    .get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`)
    .then(({ text }) => text)
}

const getMoviesFromAPI = (id) => {
  return request.get(`${apiUrl}${id}?api_key=${apiKey}&language=en-US`)
    .then(({ body }) => {
      return {
        releaseDate: body.release_date,
        description: body.overview,
        rating: body.vote_average,
        genres: body.genres,
        poster: body.poster_path,
        backdrop: body.backdrop_path
      }
    }).then(movie => {
      return request.get(`${apiUrl}${id}/credits?api_key=${apiKey}`)
        .then(({ body }) => {
          movie.cast = body.cast
          return movie
        })
    })
}

module.exports = {
  findMovieFromAPI,
  getMoviesFromAPI
}
