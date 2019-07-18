export const GET_MOVIE_DETAILS_PENDING = 'GET_MOVIE_DETAILS_PENDING'
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS'
export const GET_MOVIE_DETAILS_ERROR = 'GET_MOVIE_DETAILS_ERROR'

export function getMovieDetailsPending () {
  return {
    type: GET_MOVIE_DETAILS_PENDING
  }
}

export function getMovieDetailsSuccess (movieDetails) {
  return {
    type: GET_MOVIE_DETAILS_SUCCESS,
    movieDetails
  }
}

export function getMovieDetailsError (message) {
  return {
    type: GET_MOVIE_DETAILS_ERROR,
    message
  }
}
