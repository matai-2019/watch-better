import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist'

const watchlist = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return getNewWatchlist(state, action.movie)
    case REMOVE_FROM_WATCHLIST:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

function getNewWatchlist (list, movie) {
  let exists = false
  const newList = list.map(item => {
    if (item.id === movie.id) {
      exists = true
    }
    return item
  })

  if (exists) {
    return newList
  } else {
    newList.push(movie)
    return newList
  }
}

export default watchlist
