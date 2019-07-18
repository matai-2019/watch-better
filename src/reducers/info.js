import {
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR
} from '../actions/movieDetails'

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_PENDING,
  GET_MOVIES_ERROR
} from '../actions/movies'

export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS_PENDING:
    case GET_MOVIES_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_MOVIE_DETAILS_SUCCESS:
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case GET_MOVIE_DETAILS_ERROR:
    case GET_MOVIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    default:
      return state
  }
}
