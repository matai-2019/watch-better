import { GET_WATCHLIST_SUCCESS } from '../actions/watchlist'

const watchlist = (state = [], action) => {
  switch (action.type) {
    case GET_WATCHLIST_SUCCESS:
      return action.watchList
    default:
      return state
  }
}

export default watchlist
