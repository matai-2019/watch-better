import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Rating } from '@material-ui/lab'
import { Paper, TextField, Box, Typography, Button, withStyles } from '@material-ui/core'

import { CommentFormStyles } from '../style/muiStyles'
import { addCommentAPI } from '../../server/routes/routeHelpers'
import { isAuthenticated } from '../auth'

const StyledRating = withStyles({
  iconFilled: {
    color: '#EBBC00'
  }
})(Rating)

const CommentForm = ({ movieId }) => {
  const classes = CommentFormStyles()

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
      })
      .catch(err => { 
        console.error(err)
      //  dispatch error message when connected to the store (dispatch(error?(err.message))
      })
  }

  const auth = () => {
    if (isAuthenticated()) {
      const filter = classes.paper
      return filter
    } else {
      const filter = classes.filter
      return filter
    }
  }

  return (
    <Paper className={auth()}>
      {isAuthenticated() ? null : <Typography variant="h5" component="p" className={classes.text}>Log in to leave a comment</Typography>}
      <br/>
      <Box component="fieldset" borderColor="transparent">
        <Typography className={classes.text} component="legend">Rate the movie:</Typography>
        <StyledRating
          name="user rating"
          value={rating}
          disabled={!isAuthenticated()}
          onChange={(e, newValue) => {
            setRating(newValue)
          }}
        />
      </Box>
      <TextField
        id="comment"
        label="Leave a comment"
        multiline
        rowsMax="10"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value)
        }}
        className={classes.comment}
        margin="normal"
        variant="outlined"
        disabled={!isAuthenticated()}
      />
      <br/>
      <Button onClick={handleSubmit} variant="contained" color="primary" disabled={!isAuthenticated()}>Submit</Button>
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
  movieId: PropTypes.number
}
