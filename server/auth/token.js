const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

// const testSecret = require('../../authenticare/testing/testSecret')

module.exports = {
  decode,
  getIssuer,
  createToken
}

function getIssuer (getUserByName) {
  return function (req, res) {
    getUserByName(req.body.email)
      .then(user => {
        const token = createToken(user, process.env.REACT_APP_JWT_SECRET)
        res.json({
          message: 'Authentication successful.',
          token
        })
      })
  }
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function createToken (user, secret) {
  return jwt.sign({
    id: user.id,
    email: user.email
  }, secret, {
    expiresIn: '1d'
  })
}

function getSecret (req, payload, done) {
  const secret = process.env.REACT_APP_JWT_SECRET
  // if (secret === testSecret) {
  //   // eslint-disable-next-line no-console
  //   // console.warn('ATTENTION: Using the JWT Test secret')
  // }
  done(null, secret)
}
