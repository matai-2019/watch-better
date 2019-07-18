import React from 'react'
import { connect } from 'react-redux'
import { getMoviesSuccess } from '../actions/movies'
import PropTypes from 'prop-types'
import MovieListItem from './MovieListItem'

class MovieList extends React.Component {

  fakeData = [
    {
      id: 1,
      name: 'Harry Potter and the Philosophers Stone'
    },
    {
      id: 2,
      name: 'Harry Potter and the Chamber of Secrets'
    },
    {
      id: 3,
      name: 'Harry Potter and the Prisoner of Azkaban'
    },
    {
      id: 4,
      name: 'Harry Potter and the Goblet of Fire'
    },
    {
      id: 5,
      name: 'Harry Potter and the Order of the Phoenix'
    },
    {
      id: 6,
      name: 'Harry Potter and the Half Blood Prince'
    },
    {
      id: 7,
      name: 'Harry Potter and the Deathly Hallows'
    }
  ]

  componentDidMount () {
    this.props.dispatch(getMoviesSuccess(this.props.movies))
  }

  render () {
    // const { movies } = this.props
    // REPLACE FAKEDATA ARRAY WITH MOVIES (PROPS FROM STATE)
    return (
      <>
        {this.fakeData.map(movie => {
          return <MovieListItem key={movie.id} movie={movie} />
        })}
      </>
    )
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  dispatch: PropTypes.func
}

const mapStateToProps = state => {
  return {
    movies: state.movies
  }
}

export default connect(mapStateToProps)(MovieList)
