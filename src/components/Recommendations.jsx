import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Paper,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid
} from '@material-ui/core'

import { RecommendationsStyles } from '../style/muiStyles'

const tempData = [
  {
    id: 1,
    title: 'A Star is Born',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/wrFpXMNBRj2PBiN4Z5kix51XaIZ.jpg',
    recommended: 'true'
  },
  {
    id: 2,
    title: 'Black Panther',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
    recommended: 'true'
  },
  {
    id: 3,
    title: 'Annihilation',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/d3qcpfNwbAMCNqWDHzPQsUYiUgS.jpg',
    recommended: 'true'
  },
  {
    id: 4,
    title: 'Dear White People',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/yxQYvWjh4wjwjrr6hhNpruVCFDG.jpg',
    recommended: 'true'
  },
  {
    id: 5,
    title: 'The Pursuit of Happiness',
    image:
      'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iMNp6gTeDBXbzjKRNYtorxZ76G2.jpg',
    recommended: 'true'
  }
]

const Recommendations = props => {
  const classes = RecommendationsStyles(props)
  return (
    <Paper>
      <Typography variant="h6" component="h2" gutterBottom>
        Here are our Recommended Movies
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
        {tempData
          .filter(movie => movie.recommended)
          .map(movie => (
            <Link
              key={movie.id}
              to={`/movies/${movie.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={movie.image}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography variant="body1" component="h3">
                      {movie.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          ))}
      </Grid>
    </Paper>
  )
}

export default connect()(Recommendations)
