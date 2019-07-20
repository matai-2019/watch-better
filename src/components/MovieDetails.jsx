import React, { useEffect } from 'react'
import { Grid, Typography, Icon, Container, Box } from '@material-ui/core'
import { connect } from 'react-redux'

import { MovieDetailsStyles } from '../style/muiStyles'
import { getMovieDetails } from '../actions/movieDetails'

function MovieDetails ({ dispatch, movieDetails, info, match }) {
  const classes = MovieDetailsStyles()

  const styles = {
    cardContainer: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundImage: `url(https://image.tmdb.org/t/p/w1400_and_h450_face${movieDetails.poster})`,
      backgroundColor: '#333'
    },
    customFilter: {
      backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(10.59%, 5.49%, 1.96%, 0.9) 0%, rgba(25.49%, 19.22%, 14.12%, 0.8) 100%)'
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
    return genres.join(', ')
  }

  return !info.pending &&
  <div style={styles.cardContainer}>
    <div style={styles.customFilter}>
      <Container maxWidth='lg'>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <img
              className={classes.poster}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`} />
          </Grid>
          <Grid item xs={8} className={classes.container}>
            <Typography variant="h2" component="h1">
              {movieDetails.title}
            </Typography>
            <Box display="flex" flexDirection="row">
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Typography variant="body1" component="h2" gutterBottom>test one </Typography>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Typography variant="body1" component="h3" gutterBottom>test two</Typography>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Typography variant="body1" component="h3" gutterBottom>test three</Typography>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Typography variant="body1" component="h3" gutterBottom>test four</Typography>
              </Box>
              <Box>
                <Icon className={classes.icon} color="primary">theaters</Icon>
                <Typography variant="body1" component="h3" gutterBottom>test five</Typography>
              </Box>

            </Box>
            <Typography variant="subtitle1" gutterBottom>
              {movieDetails.genres && `Genres: ${extractGenres(movieDetails.genres)}`}
            </Typography>
            <Typography>
              {`Released on: ${movieDetails.releaseDate}`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {movieDetails.description}
            </Typography>
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

export default connect(mapStateToProps)(MovieDetails)
