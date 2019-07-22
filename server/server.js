const express = require('express')
const pino = require('express-pino-logger')()
const router = require('./routes/movies')
const authRoutes = require('./routes/auth')

const server = express()

server.use(express.json())
server.use(pino)

server.use('/movie-api/', router)
server.use('/auth/', authRoutes)
server.use(express.static('public'))

module.exports = server
