const express = require('express')
const router = express.Router()
const { decodeToken } = require('../auth')

const db = require('../db/db')

router.get('/', decodeToken, (req, res) => {
  const { id } = req.user
  db.getSeenListByUserId(id)
    .then(seenlist => {
      res.json(seenlist)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', decodeToken, (req, res) => {
  const userId = req.user.id
  db.insertMovieToSeenListByUserId(userId, req.body.movieId)
    .then(() => res.status(200).send('ok'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.put('/', decodeToken, (req, res) => {
  db.delMovieFromSeenList(req.body.movieId)
    .then(() => res.status(200).send('ok'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
