import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  Paper,
  Typography,
  Divider,
  Grid,
  Button
} from '@material-ui/core'

import { RecommendationsStyles } from '../style/muiStyles'
import RecommendationDetail from './RecommendationDetail'

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

  const handleSeeAll = () => {
    setRedirect('see')
  }

  const renderRedirect = () => {
    if (redirect === 'see') {
      return <Redirect push to={'/movies/list'} />
    } else if (redirect) {
      return <Redirect push to={`/movie/${redirect}`} />
    }
  }

  return (
    !info.pending && (
      <Paper>
        {redirect && renderRedirect()}
        <Typography variant="h6" component="h2" gutterBottom>
          OUR TOP PICKS
        </Typography>
        <Divider />
        <Grid container direction="row" justify="center" alignItems="center">
          {movies
            .filter(movie => movie.recommended)
            .map(movie => (
              <RecommendationDetail
                movie={movie}
                id={movie.id}
                key={movie.id}
                onClick={handleClick}
                image={`https://image.tmdb.org/t/p/w200${movie.image}`}
                title={movie.title} />
            ))}
        </Grid>
        <Button variant="outlined" color="primary" className={classes.button} onClick={handleSeeAll}>SEE ALL MOVIES</Button>
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
