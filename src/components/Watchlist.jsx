import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { WatchlistStyles } from '../style/muiStyles'
import PropTypes from 'prop-types'
import {
  AppBar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Box,
  Container,
  Toolbar
} from '@material-ui/core'

import WatchlistItem from './WatchlistItem'
import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { isAuthenticated } from '../auth'

const ElevationScroll = props => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  })
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func
}

const Watchlist = (props) => {
  const { watchlist, dispatch } = props
  const classes = WatchlistStyles(props)

  useEffect(() => {
    dispatch(getWatchList())
    dispatch(getSeenList())
  }, [dispatch])

  return (
    isAuthenticated()
      ? <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={classes.app}>
          <Toolbar>
            <Typography className={classes.watchlist} variant="h6">WATCHLIST</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      <Container>
        <div className={classes.top}>
          <Box my={2}>
            {watchlist && [...new Array(1)]
              .map(
                () => watchlist.map((movie, id) => {
                  return (
                    <WatchlistItem key={id} movie={movie}/>
                  )
                })
              )}
          </Box>
        </div>
      </Container>
    </>

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
