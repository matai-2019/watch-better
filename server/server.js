const express = require('express')
const path = require('path')

const router = require('./routes/movies')
const authRoutes = require('./routes/auth')
const watchlist = require('./routes/watchlist')
const seenlist = require('./routes/seenlist')

const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, '../public')))
server.use('/movie-api/watchlist', watchlist)
server.use('/movie-api/seenlist', seenlist)
server.use('/movie-api/', router)
server.use('/movie-api/', authRoutes)

server.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = server
