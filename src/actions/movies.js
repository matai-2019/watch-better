export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS'
export const GET_MOVIES_PENDING = 'GET_MOVIES_PENDING'
export const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR'

export function getMoviesPending () {
  return {
    type: GET_MOVIES_PENDING
  }
}

export function getMoviesSuccess (movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    movies
  }
}

export function getMoviesError (message) {
  return {
    type: GET_MOVIES_ERROR,
    message
  }
}
