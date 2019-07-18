import { GET_MOVIE_DETAILS_SUCCESS } from '../actions/movieDetails'

export default function movieDetailsReducer (state = {}, action) {
  switch (action.type) {
    case GET_MOVIE_DETAILS_SUCCESS:
      return action.movieDetails
    default:
      return state
  }
}
