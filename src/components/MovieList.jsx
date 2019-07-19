import React from 'react'
import { connect } from 'react-redux'
import { getMoviesSuccess } from '../actions/movies'
import PropTypes from 'prop-types'
import MovieListItem from './MovieListItem'

class MovieList extends React.Component {

  fakeData = [
    {
      id: 1,
      name: 'Harry Potter and the Philosophers Stone',
      summary: 'First Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 2,
      name: 'Harry Potter and the Chamber of Secrets',
      summary: 'Second Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 3,
      name: 'Harry Potter and the Prisoner of Azkaban',
      summary: 'Third Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 4,
      name: 'Harry Potter and the Goblet of Fire',
      summary: 'Fourth Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 5,
      name: 'Harry Potter and the Order of the Phoenix',
      summary: 'Fifth Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 6,
      name: 'Harry Potter and the Half Blood Prince',
      summary: 'Sixth Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 7,
      name: 'Harry Potter and the Deathly Hallows',
      summary: 'Seventh Harry Potter movie',
      image: 'hp.jpg'
    },
    {
      id: 8,
      name: 'Harry Potter and the Deathly Hallows',
      summary: 'Eighth Harry Potter movie',
      image: 'hp.jpg'
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
