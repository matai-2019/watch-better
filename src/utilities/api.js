const request = require('superagent')
const { getAuthorizationHeader } = require('../auth')

const addCommentAPI = (comment) => {
  return request.post('/movie-api/comment')
    .send(comment)
    .set(getAuthorizationHeader())
}

module.exports = {
  addCommentAPI
}
