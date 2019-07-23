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
  db.insertMovieToSeenListByUserId(userId, req.body.id)
    .then(() => res.status(200))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.delete('/', decodeToken, (req, res) => {
  db.delMovieFromSeenList(req.body.id)
    .then(() => res.status(200))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
