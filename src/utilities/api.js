const request = require('superagent')

const addCommentAPI = (comment) => {
  return request.post('/movie-api/comment')
    .send(comment)
}

module.exports = {
  addCommentAPI
}