import { GET_USER } from '../actions/loggedUser'

export default function getUserReducer (state = '', action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}
