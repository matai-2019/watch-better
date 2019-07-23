import request from 'superagent'

import { getAuthorizationHeader } from '../auth'

export const addMovieToWatchList = movieId => {
  return request.post('/movie-api/watchlist').send({ movieId }).set(getAuthorizationHeader())
}

export const addMovieToSeenList = movieId => {
  return request.post('/movie-api/seenlist').send({ movieId }).set(getAuthorizationHeader())
}

export const removeMovieFromWatchList = movieId => {
  return request.del('/movie-api/watchlist').send({ movieId }).set(getAuthorizationHeader())
}

export const removeMovieFromSeenList = movieId => {
  return request.put('/movie-api/seenlist').send({
    movieId }).set(getAuthorizationHeader())
}

export const addCommentAPI = (comment) => {
  return request.post('/movie-api/comment')
    .send(comment)
}
