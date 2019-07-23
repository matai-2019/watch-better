import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { CommentsStyles } from '../style/muiStyles'
import { deleteComment } from '../utilities/api'
import { isAuthenticated } from '../auth'

const Comment = ({ thing, comment: { id, userRating, firstName, comment, created } }) => {
  const classes = CommentsStyles()

  const handleDelete = () => {
    return deleteComment(id)
      .then(data => {
        thing(data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
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
        {
          isAuthenticated() && <Button onClick={handleDelete} variant="contained" color="primary" >Delete comment</Button>
        }
      </Card>
    </>
  )
}

Comment.propTypes = {
  comment: PropTypes.object,
  thing: PropTypes.func
}

export default Comment
