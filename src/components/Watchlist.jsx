import React, { useState } from 'react'
import { connect } from 'react-redux'
import { WatchlistStyles } from '../style/muiStyles'
import PropTypes from 'prop-types'

import WatchlistItem from './WatchlistItem'
import { removeFromWatchlist } from '../actions/watchlist'
import Sorter from './Sorter'

const Watchlist = (props) => {
  const { watchlist, dispatch } = props
  const classes = WatchlistStyles(props)

  const [list, setList] = useState(watchlist)

  const removeMovie = id => {
    const newList = list.filter(movie => movie.id !== id)
    setList(newList)
    dispatch(removeFromWatchlist(id))
  }

  return (
    <div className={classes.top}>
      <Sorter />
      {watchlist.map((movie, id) => {
        return (
          <WatchlistItem key={id} movie={movie} removeMovie={removeMovie}/>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  }
}

export default connect(mapStateToProps)(Watchlist)

Watchlist.propTypes = {
  watchlist: PropTypes.object,
  dispatch: PropTypes.func
}
