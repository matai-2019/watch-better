import React from 'react'
import { Card, CardMedia, CardContent, Container, Grid, Typography, Icon, List, ListItem } from '@material-ui/core'

import { MovieDetailsStyles } from '../style/muiStyles'

export default function MovieDetails () {
  const classes = MovieDetailsStyles()

  const movieDetails = {
    title: 'This is a movie title',
    releaseDate: '11/11/1111',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    rating: 3.5,
    genre: 'drama',
    poster: 'http://place-puppy.com/400x300'
  }
  //  dummy data to be removed after passing props down to this component

  return (
    <Container>
      <Card>
        <Typography variant="h1">{movieDetails.title}</Typography>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <CardMedia
                className={classes.poster}
                image={movieDetails.poster} />
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
                </ListItem>
                <ListItem>
                  <Typography variant="subtitle1" gutterBottom>{`genre: ${movieDetails.genre}, released on: ${movieDetails.releaseDate}`}</Typography>
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
  )
}
