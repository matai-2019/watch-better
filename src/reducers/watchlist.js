import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist'

const initialState = [{ id: 1 }, { id: 7 }]

const watchlist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WATCHLIST:
      return getNewWatchlist(state, action.id)
    case REMOVE_FROM_WATCHLIST:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

function getNewWatchlist (list, id) {
  let exists = false
  const newList = list.map(item => {
    if (item.id === id) {
      exists = true
    }
    return item
  })

  if (exists) {
    return newList
  } else {
    newList.push({ id })
    return newList
  }
}

export default watchlist
