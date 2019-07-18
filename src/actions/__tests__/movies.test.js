import {
  GET_MOVIES_PENDING,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  getMoviesPending,
  getMoviesSuccess,
  getMoviesError
} from '../movies.js'

describe('movies actions', () => {
  it('GET_MOVIES_SUCCESS returns Movies', () => {
    const testMovies = [{}, {}, {}]
    const action = getMoviesSuccess(testMovies)
    expect(action.type).toBe(GET_MOVIES_SUCCESS)
    expect(action.movies.length).toBe(3)
  })

  it('GET_MOVIES_ERROR returns an error message', () => {
    const errorMessage = 'Cannot get movies'
    const action = getMoviesError(errorMessage)
    expect(action.type).toBe(GET_MOVIES_ERROR)
    expect(action.message).toMatch('Cannot get movies')
  })

  it('GET_MOVIES_PENDING works', () => {
    const action = getMoviesPending()
    expect(action.type).toBe(GET_MOVIES_PENDING)
  })
})
