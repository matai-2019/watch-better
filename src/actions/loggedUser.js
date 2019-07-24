export const GET_USER = 'GET_USER'

export function getLoggedUser (email) {
  return {
    type: GET_USER,
    user: email
  }
}
