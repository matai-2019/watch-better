import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Typography } from '@material-ui/core'

const Comment = (props) => {
  return (
    <>
      <Paper>
        <Typography variant="h6">
          {props.user_id}
        </Typography>
      </Paper>
    </>
  )
}

Comment.propTypes = {
  user_id: PropTypes.number,
  movie_id: PropTypes.number,
  key: PropTypes.number,
  comment: PropTypes.string,
  user_rating: PropTypes.number,
  created: PropTypes.string
}

export default Comment
