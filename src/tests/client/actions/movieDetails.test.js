import {
  GET_MOVIE_DETAILS_PENDING,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_ERROR,
  getMovieDetailsPending,
  getMovieDetailsSuccess,
  getMovieDetailsError
} from '../../../actions/movieDetails'

describe('movieDetails actions', () => {
  it('GET_MOVIE_DETAILS_SUCCESS returns Movie Details', () => {
    const testMovieDetails = {}
    const action = getMovieDetailsSuccess(testMovieDetails)
    expect(action.type).toBe(GET_MOVIE_DETAILS_SUCCESS)
    expect(typeof action.movieDetails).toStrictEqual('object')
  })

  it('GET_MOVIE_DETAILS_ERROR returns an error message', () => {
    const errorMessage = 'Cannot get movie details'
    const action = getMovieDetailsError(errorMessage)
    expect(action.type).toBe(GET_MOVIE_DETAILS_ERROR)
    expect(action.message).toMatch('Cannot get movie details')
  })

  it('GET_MOVIE_DETAILS_PENDING works', () => {
    const action = getMovieDetailsPending()
    expect(action.type).toBe(GET_MOVIE_DETAILS_PENDING)
  })
})
