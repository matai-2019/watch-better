import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'

const Comment = (props) => {
  return (
    <>
      <br />
      <Paper>
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
      </Paper>
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
