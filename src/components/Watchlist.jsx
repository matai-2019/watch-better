import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { WatchlistStyles } from '../style/muiStyles'
import PropTypes from 'prop-types'
import { Container, Box, Button } from '@material-ui/core'

import WatchlistItem from './WatchlistItem'
import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { isAuthenticated } from '../auth'
import MovieTestDetails from './MovieTestDetails'

const Watchlist = (props) => {
  const { watchlist, dispatch } = props
  const classes = WatchlistStyles(props)
  const [redirect, setRedirect] = useState()

  useEffect(() => {
    dispatch(getWatchList())
    dispatch(getSeenList())
  }, [dispatch])

  const handleSeeAll = () => {
    setRedirect('see')
  }

  const renderRedirect = () => {
    if (redirect === 'see') {
      return <Redirect push to={'/movies/list'} />
    }
  }

  return (
    isAuthenticated()
      ? <div>
        <MovieTestDetails />
        <Container className={classes.container}>
          {renderRedirect()}
          <Box display="flex" flexDirection="row" p={1} m={1} className={classes.actions}>
            <Box p={1}>
              <h3 className={classes.title}>Your Watchlist:</h3>
            </Box>
            <Box p={1} m={2}>
              <Button className={classes.button} variant="outlined" color="primary" onClick={handleSeeAll}>
                ADD MOVIES
              </Button>
            </Box>
          </Box>
          <div>
            {watchlist && watchlist.map((movie, id) => {
              return <WatchlistItem key={id} movie={movie} />
            })
            }
          </div>
        </Container>
      </div>
      : <Redirect to="/login" />
  )
}

const mapStateToProps = state => {
  return {
    watchlist: state.watchlist
  }
}

export default connect(mapStateToProps)(Watchlist)

Watchlist.propTypes = {
  watchlist: PropTypes.array,
  dispatch: PropTypes.func
}
