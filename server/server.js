const express = require('express')
const pino = require('express-pino-logger')();


const server = express()

server.use(express.json())
server.use(pino)

module.exports = server
