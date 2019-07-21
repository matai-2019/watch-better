import React, { useEffect } from 'react'
import { Grid, Typography, Icon, Container, Box, withStyles, Avatar } from '@material-ui/core'
import { connect } from 'react-redux'
import Rating from '@material-ui/lab/Rating'

import { MovieDetailsStyles } from '../style/muiStyles'
import { getMovieDetails } from '../actions/movieDetails'
import Avatars from './Avatars'
import PropTypes from 'prop-types'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00'
  }
})(Rating)

function MovieDetails ({ dispatch, movieDetails, info, match }) {
  const classes = MovieDetailsStyles()

  const styles = {
    cardContainer: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop})`,
      backgroundColor: '#333'
    },
    customFilter: {
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(10.59%, 5.49%, 1.96%, 1) 0%, rgba(68.6%, 55.7%, 0%, 0.8) 100%)',
      paddingTop: 50,
      paddingBottom: 50
    }
  }

  useEffect(() => {
    dispatch(getMovieDetails(match.params.id))
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

  return !info.pending &&
  <div style={styles.cardContainer}>
    <div style={styles.customFilter}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container >
          <Grid item xs={4}>
            <img
              className={classes.poster}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`}
              alt='movie poster'/>
          </Grid>
          <Grid item xs={8} className={classes.detailsContainer}>
            <div className={classes.titleContainer}>
              <Typography className={classes.title} variant="h3" component="h1">
                {movieDetails.title}
              </Typography>
              <Typography className={classes.year} component="span">
                {`(${extractYear(movieDetails.releaseDate)})`}
              </Typography>
            </div>
            <Box display="flex" flexDirection="row">
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Grid item><Avatar className={classes.avatar}>B</Avatar></Grid>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Grid item><Avatar className={classes.avatar}>R</Avatar></Grid>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Grid item><Avatar className={classes.avatar}>K</Avatar></Grid>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Grid item><Avatar className={classes.avatar}>L</Avatar></Grid>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Grid item><Avatar className={classes.avatar}>F</Avatar></Grid>
                {/* {props.movie.movieTests.map(x => {
                  if (x.result) return <Avatars key={x.testType} test={x} />
                  else return null
                })
                } */}
              </Box>
            </Box>
            <Typography className= {classes.genres}component="span" gutterBottom>
              {movieDetails.genres && extractGenres(movieDetails.genres)}
            </Typography>
            <div className={classes.overview}>
              <Typography variant="h6" gutterBottom>
                Overview
              </Typography>
              <Typography className={classes.overviewText} gutterBottom>
                {movieDetails.description}
              </Typography>
            </div>
            <div>
              <Typography variant="body2" style={{ marginTop: 30 }} gutterBottom>
                <StyledRating name="half-rating" value={movieDetails.rating / 2} readOnly precision={0.1}/>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  </div>
}

function mapStateToProps (state) {
  return {
    movieDetails: state.movieDetails,
    info: state.info
  }
}

MovieDetails.propTypes = {
  movie: PropTypes.object
}

export default connect(mapStateToProps)(MovieDetails)
