import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { WatchlistItemStyles } from '../style/muiStyles'
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  withStyles,
  Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { setErrorMessage } from '../actions/errorMessage'
import { removeMovieFromWatchList, addMovieToSeenList, removeMovieFromSeenList } from '../utilities/api'

const StyledRating = withStyles({
  iconFilled: {
    color: '#333',
    marginLeft: 2.5,
    marginRight: 2.5
  }
})(Rating)

const WatchlistItem = (props) => {
  const classes = WatchlistItemStyles(props)
  const { seenList, movie, dispatch } = props

  const seenStatus = () => {
    const element = props.seenList.find(item => {
      return item.id === props.movie.id
    })
    if (element) {
      return true
    } else {
      return false
    }
  }

  const [redirect, setRedirect] = useState()

  const seenListEntry = seenList.filter(item => {
    return item.movieId === movie.movieId
  })[0]
  const handleClick = () => {
    setRedirect(movie.movieId)
  }

  const handleSeen = () => {
    if (!seenListEntry) {
      addMovieToSeenList(movie.movieId)
        .then(() => {
          dispatch(getSeenList())
        })
        .catch(err => {
          dispatch(setErrorMessage(err))
        })
    } else {
      removeMovieFromSeenList(seenListEntry.id)
        .then(() => {
          dispatch(getSeenList())
        })
        .catch(err => {
          dispatch(setErrorMessage(err))
        })
    }
  }

  const handleRemove = () => {
    removeMovieFromWatchList(movie.id).then(() => {
      dispatch(getWatchList())
    })
  }

  const renderRedirect = () => {
    if (redirect) { return <Redirect push to={`/movie/${redirect}`} /> }
  }

  return (
    <>
    {renderRedirect()}
    <Container className={classes.list}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Box display="flex" justifyContent="flex-start" m={0} p={0}>
                    <Box>
                      <Typography gutterBottom className={classes.text} onClick={handleClick}>
                        {movie.title}
                      </Typography>
                    </Box>
                    <Box>
                      <StyledRating name="half-rating" value={movie.rating / 2} readOnly precision={0.1}/>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Button size="small" className={classes.seenButton} style={{ backgroundColor: seenListEntry ? '#A9DA71' : '#DADADA' }}onClick={handleSeen}>
                <i className={classes.icon}>{ seenListEntry ? 'visibility' : 'visibility_off'}</i>
              </Button>
              <Button size="small" className={classes.removeButton} onClick={handleRemove}>
                <i className={classes.icon}>delete_forever</i>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
    </>
  )
}

WatchlistItem.propTypes = {
  movie: PropTypes.object,
  dispatch: PropTypes.func,
  seenList: PropTypes.array
}

const mapStateToProps = ({ seenList }) => {
  return {
    seenList
  }
}

export default connect(mapStateToProps)(WatchlistItem)
