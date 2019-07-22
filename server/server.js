const express = require('express')
const pino = require('express-pino-logger')()
const moviesRouter = require('./routes/movies')
const commentsRouter = require('./routes/comments')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(pino)

server.use(express.static('public'))
server.use('/movie-api/', moviesRouter)
server.use('/comments-api/', commentsRouter)

server.use('/', authRoutes)

module.exports = server
