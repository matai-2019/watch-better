import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { MovieListItemStyles } from '../style/muiStyles'
import {
  Container,
  Typography,
  Grid,
  Paper,
  ButtonBase,
  Button,
  withStyles,
  Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import Avatars from './Avatars'
import { isAuthenticated } from '../auth'
import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { setErrorMessage } from '../actions/errorMessage'
import { addMovieToWatchList, removeMovieFromWatchList, addMovieToSeenList, removeMovieFromSeenList } from '../utilities/api'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00',
    marginRight: 2.5
  }
})(Rating)

const MovieListItem = props => {
  const classes = MovieListItemStyles(props)
  const { watchlist, movie, dispatch, seenList } = props
  const watchListEntry = watchlist.filter(item => {
    return item.movieId === movie.id
  })[0]

  const seenListEntry = seenList.filter(item => {
    return item.movieId === movie.id
  })[0]

  const [redirect, setRedirect] = useState()

  const handleClick = () => {
    setRedirect(movie.id)
  }

  const handleWatch = () => {
    if (!watchListEntry) {
      addMovieToWatchList(movie.id)
        .then(() => {
          dispatch(getWatchList())
        })
        .catch(err => {
          dispatch(setErrorMessage(err))
        })
    } else {
      removeMovieFromWatchList(watchListEntry.id)
        .then(() => {
          dispatch(getWatchList())
        })
        .catch(err => {
          dispatch(setErrorMessage(err))
        })
    }
  }

  const handleSeen = () => {
    if (!seenListEntry) {
      addMovieToSeenList(movie.id)
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

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect push to={`/movie/${redirect}`} />
    }
  }

  return (
    <>
      {renderRedirect()}
      <Container className={classes.list}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase>
                  <img
                    className={classes.img}
                    alt="complex"
                    src={`https://image.tmdb.org/t/p/w200${movie.image}`}
                    onClick={handleClick}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      className={classes.text}
                      onClick={handleClick}
                    >
                      {movie.title}
                    </Typography>
                    <StyledRating
                      name="half-rating"
                      value={movie.rating / 2}
                      readOnly
                      precision={0.1}
                    />
                  </Grid>
                </Grid>
                <Grid>
                  <Box display="flex" justifyContent="flex-end" m={0} p={0}>
                    {movie.movieTests.map(x => {
                      if (x.result) return <Avatars key={x.testType} test={x} />
                      else return null
                    })}
                  </Box>
                  {isAuthenticated() && <div className={classes.topMargin}>
                    <Button
                      size="small"
                      className={classes.seenButton}
                      style={{
                        backgroundColor: seenListEntry ? '#A9DA71' : '#FFDF59'
                      }}
                      onClick={handleSeen}
                    >
                      <i className={classes.icon}>
                        {seenListEntry ? 'visibility' : 'visibility_off'}
                      </i>
                      &nbsp;SEEN
                    </Button>
                    <Button
                      size="small"
                      className={classes.watchButton}
                      style={{
                        backgroundColor: watchListEntry ? '#A9DA71' : '#FFDF59'
                      }}
                      onClick={handleWatch}
                    >
                      <i className={classes.icon}>
                        {watchListEntry ? 'check_box' : 'add_to_queue'}
                      </i>
                      &nbsp;WATCHLIST
                    </Button>
                  </div>}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object,
  dispatch: PropTypes.func,
  watchlist: PropTypes.array,
  seenList: PropTypes.array
}

const mapStateToProps = ({ watchlist, seenList }) => {
  return {
    watchlist,
    seenList
  }
}

export default connect(mapStateToProps)(MovieListItem)
