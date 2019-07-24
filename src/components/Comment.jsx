import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography, Button } from '@material-ui/core'
import { connect } from 'react-redux'
// import { Card, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { CommentStyles } from '../style/muiStyles'
import { deleteComment, getUserId } from '../utilities/api'

const Comment = ({ thing, loggedUser, comment: { id, userRating, firstName, comment, created, userID } }) => {
  const classes = CommentStyles()

  const [userId, setUserId] = useState(null)

  useEffect(() => {
    getUserId(loggedUser)
      .then(data => {
        setUserId(data[0].id)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [loggedUser])

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
        {userId === userID && <Button onClick={handleDelete} variant="contained" color="primary" >Delete comment</Button>}
      </Paper>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loggedUser: state.loggedUser
  }
}

export default connect(mapStateToProps)(Comment)

Comment.propTypes = {
  comment: PropTypes.object,
  thing: PropTypes.func,
  user: PropTypes.number,
  loggedUser: PropTypes.string
}
