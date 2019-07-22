import React from 'react'
import { connect } from 'react-redux'

import WatchlistItem from './WatchlistItem'
import { removeFromWatchlist } from '../actions/watchlist';

class Watchlist extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      watchlist: props.watchlist
    }
  }
  
  removeMovie = id => {
    const list = this.state.watchlist.filter(movie => movie.id !== id)
    this.setState({ list })
    this.props.dispatch(removeFromWatchlist(id))
  }

  render () {
    const {watchlist} = this.props
    return (
      watchlist.map((movie, id) => {
        return (
          <WatchlistItem key={id} movie={movie} removeMovie={this.removeMovie}/>
        )
      })
    )
  }
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  }
}

export default connect(mapStateToProps)(Watchlist)
