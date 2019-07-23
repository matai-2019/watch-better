import request from 'superagent'

const commentURL = '/movie-api/comment'

export function addComment (comment) {
  return request.post(commentURL)
    .send(comment)
}
