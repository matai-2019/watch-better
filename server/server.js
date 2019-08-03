const express = require('express')
const path = require('path')
const pino = require('express-pino-logger')()
const router = require('./routes/movies')
const authRoutes = require('./routes/auth')
const watchlist = require('./routes/watchlist')
const seenlist = require('./routes/seenlist')

const server = express()

server.use(express.json())
server.use(pino)

if (process.env.NODE_ENV === 'development') {
  server.use(express.static('public'))
} else if (process.env.NODE_ENV === 'production') {
  server.use(express.static(path.join(__dirname, '../build')))

  server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'))
  })
}

server.use('/movie-api/watchlist', watchlist)
server.use('/movie-api/seenlist', seenlist)
server.use('/movie-api/', router)

server.use('/', authRoutes)

module.exports = server
