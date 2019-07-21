import request from 'superagent'

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

export const getMovies = filter => {
  return dispatch => {
    dispatch(getMoviesPending())
    return request
      .get(`/movie-api/`)
      .then(res => {
        const movies = res.body
        if (filter) {
          const filteredMovies = movies.filter(movie =>
            filter.every(test =>
              movie.movieTests.find(movieTest => {
                return movieTest.testType === test && movieTest.result
              })
            )
          )
          dispatch(getMoviesSuccess(filteredMovies))
        } else {
          dispatch(getMoviesSuccess(movies))
        }
      })
      .catch(error => {
        dispatch(getMoviesError(error.message))
      })
  }
}
