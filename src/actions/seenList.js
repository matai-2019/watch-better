import request from 'superagent'

import { getAuthorizationHeader } from '../auth'

export const SEEN = 'SEEN'
export const UNSEEN = 'UNSEEN'
export const GET_SEENLIST_SUCCESS = 'GET_SEENLIST_SUCCESS'
export const GET_SEENLIST_PENDING = 'GET_SEENLIST_PENDING'
export const GET_SEENLIST_ERROR = 'GET_SEENLIST_ERROR'

export const seen = id => {
  return {
    type: SEEN,
    id
  }
}

export const unseen = id => {
  return {
    type: UNSEEN,
    id
  }
}

export function getSeenListPending () {
  return {
    type: GET_SEENLIST_PENDING
  }
}

export function getSeenListSuccess (seenList) {
  return {
    type: GET_SEENLIST_SUCCESS,
    seenList
  }
}

export function getSeenListError (message) {
  return {
    type: GET_SEENLIST_ERROR,
    message
  }
}

export const getSeenList = () => {
  return dispatch => {
    dispatch(getSeenListPending())
    return request
      .get(`/movie-api/seenlist`)
      .set(getAuthorizationHeader())
      .then(seenList => {
        dispatch(getSeenListSuccess(seenList))
      })
      .catch(error => {
        dispatch(getSeenListError(error.message))
      })
  }
}
