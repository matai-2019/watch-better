import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { WatchlistItemStyles } from '../style/muiStyles'
import {
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  withStyles,
  Box
} from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { removeFromWatchlist } from '../actions/watchlist'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00'
  }
})(Rating)

const MovieListItem = (props) => {
  const classes = WatchlistItemStyles(props)

  const [redirect, setRedirect] = useState()
  const [isSeen, setIsSeen] = useState(false)
  const [seenColor, setSeenColor] = useState(false)

  const handleClick = () => {
    setRedirect(props.movie.id)
  }

  const handleSeen = () => {
    const icon = isSeen
    const color = seenColor
    if (isSeen) {
      setIsSeen(!icon)
      setSeenColor(!color)
    } else {
      setIsSeen(!icon)
      setSeenColor(!color)
    }
  }

  const handleRemove = () => {
    props.dispatch(removeFromWatchlist(props.movie.id))
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
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Box display="flex" justifyContent="flex-start" m={0} p={0} bgcolor="background.paper">
                    <Box>
                      <Typography gutterBottom className={classes.text} onClick={handleClick}>
                        {props.movie.title}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" gutterBottom>
                        <StyledRating name="half-rating" value={props.movie.rating / 2} readOnly precision={0.1}/>
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Button size="small" className={classes.seenButton} style={{ backgroundColor: seenColor ? '#a9da71' : '#FFDF59' }}onClick={handleSeen}>
                <i className={classes.icon}>{ isSeen ? 'visibility' : 'visibility_off'}</i>
              </Button>
              <Button size="small" className={classes.removeButton} onClick={handleRemove}>
                <i className={classes.icon}>delete_forever</i>
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Container>
    </>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object,
  dispatch: PropTypes.func
}

export default connect()(MovieListItem)
