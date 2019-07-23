const express = require('express')
const pino = require('express-pino-logger')()
const router = require('./routes/movies')
const authRoutes = require('./routes/auth')
const watchlist = require('./routes/watchlist')
const seenlist = require('./routes/seenlist')

const server = express()

server.use(express.json())
server.use(pino)

server.use(express.static('public'))
server.use('/movie-api/watchlist', watchlist)
server.use('/movie-api/seenlist', seenlist)
server.use('/movie-api/', router)
server.use('/', authRoutes)

module.exports = server
