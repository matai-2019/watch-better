import { combineReducers } from 'redux'

import movies from './movies'
import movieDetails from './movieDetails'
import info from './info'

export default combineReducers({
  movies,
  movieDetails,
  info
})
