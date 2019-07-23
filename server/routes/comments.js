const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/:id', (req, res) => {
  db.getComments(Number(req.params.id))
    .then(comments => res.status(200).json(comments))
    .catch(err => res.status(500).send(err.message))
})
