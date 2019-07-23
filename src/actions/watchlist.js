import request from 'superagent'

import { getAuthorizationHeader } from '../auth'

export const ADD_TO_WATCHLIST = 'ADD_TO_WATCHLIST'
export const REMOVE_FROM_WATCHLIST = 'REMOVE_FROM_WATCHLIST'
export const GET_WATCHLIST_SUCCESS = 'GET_WATCHLIST_SUCCESS'
export const GET_WATCHLIST_PENDING = 'GET_WATCHLIST_PENDING'
export const GET_WATCHLIST_ERROR = 'GET_WATCHLIST_ERROR'

export const addToWatchlist = movieId => {
  return {
    type: ADD_TO_WATCHLIST,
    movieId
  }
}

export const removeFromWatchlist = movieId => {
  return {
    type: REMOVE_FROM_WATCHLIST,
    movieId
  }
}

export function getWatchListPending () {
  return {
    type: GET_WATCHLIST_PENDING
  }
}

export function getWatchListSuccess (watchList) {
  return {
    type: GET_WATCHLIST_SUCCESS,
    watchList
  }
}

export function getWatchListError (message) {
  return {
    type: GET_WATCHLIST_ERROR,
    message
  }
}

export const getWatchList = () => {
  return dispatch => {
    dispatch(getWatchListPending())
    return request
      .get(`/movie-api/watchlist`)
      .set(getAuthorizationHeader())
      .then(res => {
        const watchList = res.body
        dispatch(getWatchListSuccess(watchList))
      })
      .catch(error => {
        dispatch(getWatchListError(error.message))
      })
  }
}
