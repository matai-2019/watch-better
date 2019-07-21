import React from 'react'
import PropTypes from 'prop-types'

class WatchlistItem extends React.Component {
  render () {
    const { movie } = this.props
    return (
      <>
        <p>{movie.title}</p>
        <button onClick={() => this.props.removeMovie(movie.id)}>remove</button>
      </>
    )
  }
}

export default WatchlistItem

WatchlistItem.propTypes = {
  movie: PropTypes.object,
  removeMovie: PropTypes.func
}
