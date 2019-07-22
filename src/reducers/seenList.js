import { SEEN, UNSEEN } from '../actions/seenList'

const seenList = (state = [], action) => {
  switch (action.type) {
    case SEEN:
      return getNewSeenList(state, action.id)
    case UNSEEN:
      return state.filter(item => item.id !== action.id)
    default:
      return state
  }
}

function getNewSeenList (list, id) {
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

export default seenList
