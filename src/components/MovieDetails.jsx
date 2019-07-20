import React, { useEffect } from 'react'
import { Card, CardMedia, CardContent, Container, Grid, Typography, Icon, List, ListItem } from '@material-ui/core'
import { connect } from 'react-redux'

import { MovieDetailsStyles } from '../style/muiStyles'
import { getMovieDetails } from '../actions/movieDetails'

function MovieDetails ({ dispatch, movieDetails, info, match }) {
  const classes = MovieDetailsStyles()
  useEffect(() => {
    dispatch(getMovieDetails(match.params.id))
  }, [])

  function extractGenres (arr) {
    const genres = []
    arr.forEach(x => {
      genres.push(x.name)
    })
    return genres.join(', ')
  }

  return !info.pending &&
    <Container>
      <Card>
        <Typography variant="h1">{movieDetails.title}</Typography>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <CardMedia
                className={classes.poster}
                image={`https://image.tmdb.org/t/p/w500${movieDetails.poster}`} />
            </Grid>
            <Grid item xs={8}>
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
      </Card>
    </Container>
}

function mapStateToProps (state) {
  return {
    movieDetails: state.movieDetails,
    info: state.info
  }
}

export default connect(mapStateToProps)(MovieDetails)
