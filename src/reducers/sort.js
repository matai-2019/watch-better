import {
  SORT_RAITING_HIGH_LOW,
  SORT_RAITING_LOW_HIGH,
  SORT_ALPHABETICAL_ASCENDING
} from '../actions/sort'

export default function sortReducer (state = '', action) {
  switch (action.type) {
    case SORT_RAITING_HIGH_LOW:
    case SORT_RAITING_LOW_HIGH:
    case SORT_ALPHABETICAL_ASCENDING:
      return action.type
    default:
      return state
  }
}
