import { GET_WATCHLIST_SUCCESS } from '../actions/watchlist'
import { GET_SEENLIST_SUCCESS } from '../actions/seenList'

const watchlist = (state = [], action) => {
  switch (action.type) {
    case GET_WATCHLIST_SUCCESS:
      return action.watchList
    case GET_SEENLIST_SUCCESS:
      return action.seenlist
    default:
      return state
  }
}

export default watchlist
