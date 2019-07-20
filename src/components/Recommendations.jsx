import React, { useEffect } from 'react'
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

import { getMovies } from '../actions/movies'

const Recommendations = ({ movies, info, dispatch }, ...props) => {
  const classes = RecommendationsStyles(props)

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch]
  )

  console.log(movies)

  return !info.pending &&
    <Paper>
      <Typography variant="h6" component="h2" gutterBottom>
        Here are our Recommended Movies
      </Typography>
      <Divider />
      <Grid container direction="row" justify="center" alignItems="center">
        {movies.filter(movie => movie.recommended)
          .map(movie => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              style={{ textDecoration: 'none' }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w200${movie.image}`}
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
}

function mapStateToProps ({ movies, info }) {
  return {
    movies,
    info
  }
}

export default connect(mapStateToProps)(Recommendations)
