import {
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR
} from '../../actions/movieDetails'

import {
  GET_MOVIES_SUCCESS,
  GET_MOVIES_PENDING,
  GET_MOVIES_ERROR
} from '../../actions/movies'

import infoReducer from '../info'

describe('infoReducer with getMovieDetails actions', () => {
  it('returns pending | pending: true', () => {
    const intialState = { pending: true }
    const action = { type: GET_MOVIE_DETAILS_PENDING, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns success | pending: false, error: null', () => {
    const intialState = { pending: false, error: null }
    const action = { type: GET_MOVIE_DETAILS_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns error | pending: false, error: message', () => {
    const intialState = { pending: false, error: 'ERROR' }
    const action = { type: GET_MOVIE_DETAILS_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })
})

describe('infoReducer with getMovies actions', () => {
  it('returns pending | pending: true', () => {
    const intialState = { pending: true }
    const action = { type: GET_MOVIES_PENDING, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns success | pending: false, error: null', () => {
    const intialState = { pending: false, error: null }
    const action = { type: GET_MOVIES_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })

  it('returns error | pending: false, error: message', () => {
    const intialState = { pending: false, error: 'ERROR' }
    const action = { type: GET_MOVIES_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(intialState)
  })
})
