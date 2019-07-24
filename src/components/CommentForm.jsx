import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Rating } from '@material-ui/lab'
import { Paper, TextField, Typography, Button, withStyles } from '@material-ui/core'

import { CommentFormStyles, CommentFormGuestStyles } from '../style/muiStyles'
import { addCommentAPI } from '../utilities/api'
import { isAuthenticated } from '../auth'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00'
  }
})(Rating)

const CommentForm = ({ thing, movieId }) => {
  const classes = CommentFormStyles()
  const guest = CommentFormGuestStyles()

  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(null)

  const handleSubmit = () => {
    const userInput = {
      rating,
      comment,
      movieId
    }
    return addCommentAPI(userInput)
      .then(() => {
        setComment('')
        setRating(null)
        thing('hello!')
      })
      .catch(err => {
        console.error(err)
      //  dispatch error message when connected to the store (dispatch(error?(err.message))
      })
  }

  const auth = () => isAuthenticated() ? classes.paper : `${guest.filter} ${classes.paper}`

  return (
    <Paper className={auth()}>
      {!isAuthenticated() && <Typography variant="h5" component="p" className={guest.formMessage}>Log in to leave a comment</Typography>}
      <Typography className={classes.text} component="legend" variant="h6">
        Your rating
      </Typography>
      <StyledRating
        name="user rating"
        value={rating}
        disabled={!isAuthenticated()}
        onChange={(e, newValue) => {
          setRating(newValue)
        }}
      />
      <TextField
        className={classes.comment}
        id="comment"
        label="Leave a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        variant="outlined"
        disabled={!isAuthenticated()}
        rows={6}
        rowsMax={6}
        margin="normal"
        multiline
      />
      <Button onClick={handleSubmit} variant="contained" color="primary" disabled={!isAuthenticated()}>
        Submit
      </Button>
    </Paper>
  )
}

const mapStateToProps = state => {
  return {
    movieId: state.movieDetails.id
  }
}

export default connect(mapStateToProps)(CommentForm)

CommentForm.propTypes = {
  movieId: PropTypes.number,
  thing: PropTypes.func
}
