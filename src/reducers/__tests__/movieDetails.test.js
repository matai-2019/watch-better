import { GET_MOVIE_DETAILS_SUCCESS } from '../../actions/movieDetails'

import movieDetailsReducer from '../movieDetails'

const mockDetails = {
  id: 1,
  title: 'A star is born',
  API_movie_id: 'null',
  recommended: 'true'
} //  this will come from API, so data will look differently

describe('movieDetailsReducer', () => {
  it('returns default state without case matches', () => {
    const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch' } }
    const actual = movieDetailsReducer(undefined, action)
    expect(actual).toStrictEqual({})
  })

  it('matches with GET_MOVIE_DETAILS_SUCCESS', () => {
    const action = { type: GET_MOVIE_DETAILS_SUCCESS, movieDetails: mockDetails }
    const actual = movieDetailsReducer(undefined, action)
    expect(actual).toBe(mockDetails)
  })
})
