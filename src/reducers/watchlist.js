import { ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST } from '../actions/watchlist'

const initialState = [{
  id: 2,
  title: 'Hidden Figures',
  recommended: 1,
  apiMovieId: 381284,
  movieTests: [
    { testType: 'Bechdel Test', result: 1 },
    { testType: 'Rees Davies Test', result: 0 },
    { testType: 'Ko Test', result: 1 },
    { testType: 'Landau Test', result: 1 },
    { testType: 'Feldman Test', result: 1 }],
  image: '/6cbIDZLfwUTmttXTmNi8Mp3Rnmg.jpg',
  rating: 8
}]

const watchlist = (state = initialState, action) => {
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
