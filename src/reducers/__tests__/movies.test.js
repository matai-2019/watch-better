import { GET_MOVIES_SUCCESS } from '../../actions/movies'
import moviesReducer from '../movies'

const initialState = []

const mockDetails = [{
  id: 1,
  title: 'A star is born',
  API_movie_id: 'null',
  recommended: 'true'
},
{
  id: 2,
  title: 'Black Panther',
  API_movie_id: 'null',
  recommended: 'true'
},
{
  id: 3,
  title: 'Annihilation',
  API_movie_id: 'null',
  recommended: 'true'
}]

describe('moviesReducer', () => {
  it('returns default state without case matches', () => {
    const action = { type: 'GET_NO_CASE_MATCH', action: { name: 'noCaseMatch' } }
    const actual = moviesReducer(undefined, action)
    expect(actual).toStrictEqual([])
  })

  it('matches with GET_MOVIES_SUCCESS', () => {
    const action = { type: GET_MOVIES_SUCCESS, movies: mockDetails }
    const actual = moviesReducer(initialState, action)
    expect(actual).toBe(mockDetails)
  })
})
