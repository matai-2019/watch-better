import { combineReducers } from 'redux'

import movies from './movies'
import movieDetails from './movieDetails'
import info from './info'
import sortType from './sort'

export default combineReducers({
  movies,
  movieDetails,
  info,
  sortType
})
