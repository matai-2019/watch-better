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
    const testState = { pending: true }
    const initialState = { pending: false }
    const action = { type: GET_MOVIE_DETAILS_PENDING, action: {} }
    const actual = infoReducer(initialState, action)
    expect(actual).toStrictEqual(testState)
  })

  it('returns success | pending: false', () => {
    const testState = { pending: false }
    const intialState = { pending: true }
    const action = { type: GET_MOVIE_DETAILS_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(testState)
  })

  it('returns error | pending: false, error: message', () => {
    const testState = { pending: false, error: 'ERROR' }
    const intialState = { pending: true, error: null }
    const action = { type: GET_MOVIE_DETAILS_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(testState)
  })
})

describe('infoReducer with getMovies actions', () => {
  it.skip('returns pending | pending: true', () => {
    const testState = { pending: true }
    const intialState = { pending: false }
    const action = { type: GET_MOVIES_PENDING, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(testState)
  })

  it('returns success | pending: false', () => {
    const testState = { pending: false }
    const intialState = { pending: true }
    const action = { type: GET_MOVIES_SUCCESS, action: {} }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(testState)
  })

  it('returns error | pending: false, error: message', () => {
    const testState = { pending: false, error: 'ERROR' }
    const intialState = { pending: true, error: null }
    const action = { type: GET_MOVIES_ERROR, message: 'ERROR' }
    const actual = infoReducer(intialState, action)
    expect(actual).toStrictEqual(testState)
  })
})
