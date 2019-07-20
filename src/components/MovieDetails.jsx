import React, { useEffect } from 'react'
import { Card, CardMedia, CardContent, Grid, Typography, Icon, List, ListItem, Container } from '@material-ui/core'
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
        <CardContent >
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <CardMedia
                className={classes.poster}
                image={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`} />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="h2" component="h1">{movieDetails.title}</Typography>
              <List>
                <ListItem>
                  <Icon className={classes.icon} color="primary">theaters</Icon>
                  <Typography variant="body1" component="h2" gutterBottom>test one </Typography>
                  <Icon className={classes.icon} color="primary">theaters</Icon>
                  <Typography variant="body1" component="h3" gutterBottom>test two</Typography>
                  <Icon className={classes.icon} color="primary">theaters</Icon>
                  <Typography variant="body1" component="h3" gutterBottom>test three</Typography>
                  <Icon className={classes.icon} color="primary">theaters</Icon>
                  <Typography variant="body1" component="h3" gutterBottom>test four</Typography>
                  <Icon className={classes.icon} color="primary">theaters</Icon>
                  <Typography variant="body1" component="h3" gutterBottom>test five</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1" gutterBottom>{movieDetails.genres && `Genres: ${extractGenres(movieDetails.genres)}`}</Typography>
                </ListItem>
                <ListItem>
                  <Typography>{`Released on: ${movieDetails.releaseDate}`}</Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body1" gutterBottom>{movieDetails.description}</Typography>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </CardContent>
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
