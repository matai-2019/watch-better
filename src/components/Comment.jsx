import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { CommentsStyles } from '../style/muiStyles'

const Comment = ({ comment: { userRating, firstName, comment, created } }) => {
  const classes = CommentsStyles()
  return (
    <>
      <br />
      <Card classes={classes.comment}>
        <Rating value={userRating} readOnly />
        <Typography variant="h6">
          {firstName}
        </Typography>
        <Typography variant="p">
          {comment}
        </Typography>
        <br />
        <Typography variant="p">
          {created}
        </Typography>
      </Card>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
