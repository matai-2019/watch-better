import React, { useEffect } from 'react'
import { Grid, Typography, Container, Box, withStyles, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import Rating from '@material-ui/lab/Rating'
import PropTypes from 'prop-types'
import AvatarsHover from './AvatarsHover'

import { MovieDetailsStyles, theme } from '../style/muiStyles'
import { getMovieDetails } from '../actions/movieDetails'
import Cast from './Cast'
import Comments from './Comments'
import { addMovieToWatchList, removeMovieFromWatchList, addMovieToSeenList, removeMovieFromSeenList } from '../utilities/api'
import { getWatchList } from '../actions/watchlist'
import { getSeenList } from '../actions/seenList'
import { setErrorMessage } from '../actions/errorMessage'
import { isAuthenticated } from '../auth'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00'
  }
})(Rating)

function MovieDetails ({ dispatch, movieDetails, info, match, watchlist, seenList }) {
  const classes = MovieDetailsStyles()

  const watchListEntry = watchlist.filter(item => {
    return item.movieId === Number(match.params.id)
  })[0]

  const seenListEntry = seenList.filter(item => {
    return item.movieId === Number(match.params.id)
  })[0]

  useEffect(() => {
    dispatch(getMovieDetails(match.params.id))
    isAuthenticated() && dispatch(getWatchList())
    isAuthenticated() && dispatch(getSeenList())
  }, [dispatch, match.params.id])

  function extractGenres (arr) {
    const genres = []
    arr.forEach(x => {
      genres.push(x.name)
    })
    return genres.join(' | ')
  }

  function extractYear (date) {
    return (new Date(date)).getFullYear()
  }

  const handleSeen = () => {
    if (!seenListEntry) {
      addMovieToSeenList(match.params.id)
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

  const handleWatch = () => {
    console.log(match.params.id)
    if (!watchListEntry) {
      addMovieToWatchList(match.params.id)
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

  return !info.pending &&
  <>
  <div className={classes.cardContainer} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop})` }}>
    <div className={classes.customFilter}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container >
          <Grid item xs={4}>
            <img
              className={classes.poster}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`}
              alt='movie poster'/>
          </Grid>
          <Grid item xs={8} className={classes.detailsContainer}>
            <Box display="flex" flexDirection="row">
              <Box p={1} className={classes.left}>
                <div className={classes.titleContainer}>
                  <Typography className={classes.title} variant="h3" component="h1">
                    {movieDetails.title}
                  </Typography>
                  <Typography className={classes.year} component="span">
                    {`(${extractYear(movieDetails.releaseDate)})`}
                  </Typography>
                </div>
              </Box>
              {isAuthenticated() && <Box display="flex" p={1}>
                <Button
                  className={classes.seenButton}
                  style={{
                    backgroundColor: seenListEntry ? '#A9DA71' : theme.palette.primary.main
                  }}
                  onClick={handleSeen}
                >
                  <i className={classes.buttonIcon}>
                    {seenListEntry ? 'visibility' : 'visibility_off'}
                  </i>&nbsp;SEEN
                </Button>
                <Button
                  className={classes.watchButton}
                  style={{
                    backgroundColor: watchListEntry ? '#A9DA71' : theme.palette.primary.main
                  }}
                  onClick={handleWatch}
                >
                  <i className={classes.buttonIcon}>
                    {watchListEntry ? 'check_box' : 'add_to_queue'}
                  </i>&nbsp;WATCHLIST
                </Button>
              </Box> }
            </Box>
            <Box display="flex" flexDirection="row">
              {movieDetails.movieTests && movieDetails.movieTests.map(x => {
                if (x.result) return <AvatarsHover key={x.testType} test={x} />
                else return null
              })
              }
            </Box>
            <Typography className= {classes.genres}component="span" gutterBottom>
              {movieDetails.genres && extractGenres(movieDetails.genres)}
            </Typography>
            <div className={classes.overview}>
              <Typography variant="h6" component="h2" gutterBottom>
                Overview
              </Typography>
              <Typography className={classes.overviewText} gutterBottom>
                {movieDetails.description}
              </Typography>
            </div>
            <div>
              <Box style={{ marginTop: 30 }} >
                <StyledRating name="half-rating" value={movieDetails.rating / 2} readOnly precision={0.1}/>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  </div>
  <Cast cast={movieDetails.cast}/>
  <Comments movieId={movieDetails.id} />
  </>
}

function mapStateToProps ({ movieDetails, info, watchlist, seenList }) {
  return {
    movieDetails,
    info,
    watchlist,
    seenList
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object
}

export default connect(mapStateToProps)(MovieDetails)
