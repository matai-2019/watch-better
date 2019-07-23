import React from 'react'
import PropTypes from 'prop-types'
import { Card, Typography } from '@material-ui/core'

import { CommentsStyles } from '../style/muiStyles'

const Comment = (props) => {
  const classes = CommentsStyles()
  return (
    <>
      <br />
      <Card classes={classes.comment}>
        <Typography variant="p">
          {props.user_rating}
        </Typography>
        <Typography variant="h6">
          {props.name}
        </Typography>
        <Typography variant="p">
          {props.comment}
        </Typography>
        <br />
        <Typography variant="p">
          {props.created}
        </Typography>
      </Card>
    </>
  )
}

Comment.propTypes = {
  user_id: PropTypes.number,
  movie_id: PropTypes.number,
  name: PropTypes.string,
  key: PropTypes.number,
  comment: PropTypes.string,
  user_rating: PropTypes.number,
  created: PropTypes.string
}

export default Comment
