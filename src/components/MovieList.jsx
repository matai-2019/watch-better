import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMovies } from '../actions/movies'
import PropTypes from 'prop-types'

import MovieListItem from './MovieListItem'
import Sorter from './Sorter'
import {
  sortAlphabeticalAscending,
  sortHighToLow,
  sortLowToHigh
} from '../utilities/sort'
import {
  SORT_RAITING_HIGH_LOW,
  SORT_RAITING_LOW_HIGH,
  SORT_ALPHABETICAL_ASCENDING
} from '../actions/sort'

const MovieList = ({ dispatch, movies, info, sortType }) => {
  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch, sortType])

  return (
    <>
      <Sorter />
      {!info.pending &&
        movies &&
        movies.map(movie => {
          return <MovieListItem key={movie.id} movie={movie} />
        })}
    </>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array,
  dispatch: PropTypes.func,
  info: PropTypes.object
}

const mapStateToProps = ({ movies, info, sortType }) => {
  switch (sortType) {
    case SORT_ALPHABETICAL_ASCENDING:
      return {
        movies: sortAlphabeticalAscending(movies),
        info,
        sortType
      }
    case SORT_RAITING_HIGH_LOW:
      return {
        movies: sortHighToLow(movies),
        info,
        sortType
      }
    case SORT_RAITING_LOW_HIGH:
      return {
        movies: sortLowToHigh(movies),
        info,
        sortType
      }

    default:
      return {
        movies,
        info,
        sortType
      }
  }
}

export default connect(mapStateToProps)(MovieList)
