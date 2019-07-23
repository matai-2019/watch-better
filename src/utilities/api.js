const request = require('superagent')

const addCommentAPI = (comment) => {
  return request.post('/movie-api/comment')
    .send(comment)
}

const getCommentAPI = (movieId) => {
  return request.get(`/movie-api/comments/2`)
    .then(res => {
      console.log(res)
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

module.exports = {
  addCommentAPI,
  getCommentAPI
}
