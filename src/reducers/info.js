import {
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR
} from '../actions/movieDetails'

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR
} from '../actions/movies'

import { CLEAR_ERROR_MESSAGE, SET_ERROR_MESSAGE } from '../actions/errorMessage'
import { GET_WATCHLIST_SUCCESS } from '../actions/watchlist'
import { GET_SEENLIST_SUCCESS } from '../actions/seenList'

export default function infoReducer (
  state = { pending: true, error: null },
  action
) {
  switch (action.type) {
    case GET_MOVIE_DETAILS_PENDING:
      return {
        ...state,
        pending: true
      }
    case GET_MOVIE_DETAILS_SUCCESS:
    case GET_MOVIES_SUCCESS:
    case GET_WATCHLIST_SUCCESS:
    case GET_SEENLIST_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case GET_MOVIE_DETAILS_ERROR:
    case GET_MOVIES_ERROR:
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        pending: false,
        error: action.message
      }
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}
