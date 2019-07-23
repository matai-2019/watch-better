import { GET_SEENLIST_SUCCESS } from '../actions/seenList'

const seenlist = (state = [], action) => {
  switch (action.type) {
    case GET_SEENLIST_SUCCESS:
      return action.seenList
    default:
      return state
  }
}

export default seenlist
