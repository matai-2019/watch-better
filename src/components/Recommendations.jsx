import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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

  const [redirect, setRedirect] = useState()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  const handleClick = id => () => {
    setRedirect(id)
  }

  const renderRedirect = () => {
    return <Redirect push to={`/movie/${redirect}`} />
  }

  return (
    !info.pending && (
      <Paper>
        {redirect && renderRedirect()}
        <Typography variant="h6" component="h2" gutterBottom>
          Here are our Recommended Movies
        </Typography>
        <Divider />
        <Grid container direction="row" justify="center" alignItems="center">
          {movies
            .filter(movie => movie.recommended)
            .map(movie => (
              <Card
                onClick={handleClick(movie.id)}
                key={movie.id}
                className={classes.card}
              >
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
            ))}
        </Grid>
      </Paper>
    )
  )
}

function mapStateToProps ({ movies, info }) {
  return {
    movies,
    info
  }
}

export default connect(mapStateToProps)(Recommendations)

Recommendations.propTypes = {
  dispatch: PropTypes.func,
  movies: PropTypes.array,
  info: PropTypes.object
}
