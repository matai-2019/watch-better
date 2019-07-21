import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { MovieListItemStyles } from '../style/muiStyles'
import {
  Container,
  Typography,
  Grid,
  Paper,
  ButtonBase,
  Button
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import Avatars from './Avatars'

const MovieListItem = (props) => {
  const classes = MovieListItemStyles(props)

  const [redirect, setRedirect] = useState()

  const handleClick = () => {
    setRedirect(props.movie.id)
  }

  const renderRedirect = () => {
    if (redirect) { return <Redirect push to={`/movie/${redirect}`} /> }
  }

  return (
    <>
    {renderRedirect()}
    <Container className={classes.list}>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={`https://image.tmdb.org/t/p/w200${props.movie.image}`} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom className={classes.text}>
                    {props.movie.title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    <Rating name="half-rating" value={props.movie.rating} precision={0.1} max={10}/>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button size="medium" color="secondary" onClick={handleClick}>SEE MORE</Button>
                </Grid>
              </Grid>
              {props.movie.movieTests.map(x => {
                if (x.result) return <Avatars key={x.testType} test={x} />
                else return null
              })
              }
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
    </>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object
}

export default MovieListItem
