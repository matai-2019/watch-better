export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE'
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE'

export function clearErrorMessage () {
  return {
    type: CLEAR_ERROR_MESSAGE
  }
}

export function setErrorMessage (error) {
  return {
    type: SET_ERROR_MESSAGE,
    message: error.message
  }
}
