const express = require('express')
const router = express.Router()
const { decodeToken } = require('../auth')

const db = require('../db/db')

router.get('/', decodeToken, (req, res) => {
  const { id } = req.user
  db.getWatchListByUserId(id)
    .then(watchlist => {
      res.json(watchlist)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', decodeToken, (req, res) => {
  const userId = req.user.id
  db.insertMovieToWatchList(userId, req.body.movieId)
    .then(() => res.status(200).send('ok'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/', decodeToken, (req, res) => {
  console.log(req.body)
  db.delMovieFromWatchList(req.body.movieId)
    .then(() => res.status(200).send('ok'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
