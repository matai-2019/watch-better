export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST'
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST'

export const addToWatchlist = id => {
  return {
    type: ADD_TO_WATCHLIST,
    id
  }
}

export const removeFromWatchlist = id => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    id
  }
}
