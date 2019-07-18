const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/:id',(req,res) => {
  const { id } = req.params
    res.send(`returns movie with id : ${id}`)
  })

router.get('/', (req,res) => {
  res.send('return a list of movies')
})

module.exports = router
