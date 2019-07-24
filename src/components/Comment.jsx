import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { CommentStyles } from '../style/muiStyles'

const Comment = ({ comment: { userRating, firstName, comment, created } }) => {
  const classes = CommentStyles()
  return (
    <>
      <br />
      <Paper className={classes.container} >
        <Box display='inline-flex'>
          <Typography variant="h6">
            {firstName}
          </Typography>
          <Rating className={classes.rating} value={userRating} readOnly />
        </Box>
        <Typography >
          {comment}
        </Typography>
        <br />
        <Typography className={classes.dateTime} variant="caption" >
          {created}
        </Typography>
      </Paper>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
