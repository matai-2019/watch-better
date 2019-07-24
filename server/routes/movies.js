const express = require('express')
const router = express.Router()
const { decodeToken } = require('../auth')

const { findMovieFromAPI, getMoviesFromAPI } = require('./routeHelpers')

const db = require('../db/db')

router.post('/comment', decodeToken, (req, res) => {
  const id = req.user.id
  const usersComment = {
    movie_id: req.body.movieId,
    user_id: id,
    comment: req.body.comment,
    user_rating: req.body.rating
  }

  db.addComment(usersComment)
    .then(comment => res.status(200).json(comment))
    .catch(err => res.status(500).send(err.message))
})

router.get('/comments/:movieId', (req, res) => {
  db.getComments(Number(req.params.movieId))
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(500).send(err.message))
})

router.delete('/comment/:commentId', decodeToken, (req, res) => {
  const id = req.user.id
  db.delComment(Number(req.params.commentId), id)
    .then(msg => res.status(200).send(`Deleted ${msg} comment`))
    .catch(err => res.status(500).send(err.message))
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  db.getMovieById(id).then(movieLocal => {
    return getMoviesFromAPI(movieLocal.apiMovieId)
      .then(movieApi => {
        const joinedMovie = {
          ...movieLocal,
          ...movieApi,
          cast: movieApi.cast.map(castMember => {
            return {
              name: castMember.name,
              image: castMember.profile_path
            }
          })
        }
        res.send(joinedMovie)
      })
      .catch(err => {
        res.status(500).send(`Consuming TMDB failed: ${err.message}`)
      })
  })
})

router.get('/', (req, res) => {
  db.getAllMovies()
    .then(movies => res.status(200).json(movies))
    .catch(err => res.status(500).send(err.message))
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

router.get('/userid/:email', (req, res) => {
  const { email } = req.params
  db.getUserId(email)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err.message))
})

module.exports = router
