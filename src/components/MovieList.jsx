import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
import PropTypes from 'prop-types'

import MovieListItem from './MovieListItem'

const MovieList = ({ dispatch, movies, info }) => {
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return !info.pending && movies && movies.map(movie => {
    return <MovieListItem key={movie.id} movie={movie} />
  })
}

MovieList.propTypes = {
  movies: PropTypes.array,
  dispatch: PropTypes.func,
  info: PropTypes.object
}

const mapStateToProps = ({ movies, info }) => {
  return {
    movies,
    info
  }
}

export default connect(mapStateToProps)(MovieList)
