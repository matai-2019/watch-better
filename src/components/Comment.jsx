import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Card, Typography, Button } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

import { CommentsStyles } from '../style/muiStyles'
import { deleteComment, getUserId } from '../utilities/api'
import { isAuthenticated } from '../auth'

const Comment = ({ thing, loggedUser, comment: { id, userRating, firstName, comment, created, userID } }) => {
  const classes = CommentsStyles()

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
        {userId === userID && <Button onClick={handleDelete} variant="contained" color="primary" >Delete comment</Button>}
      </Card>
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
