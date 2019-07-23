import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { CommentsStyles } from '../style/muiStyles'
// import { getCommentAPI } from '../utilities/api'

const request = require('superagent')

const Comments = ({ movieId }) => {
  const classes = CommentsStyles()

  const [comments, setComments] = useState([])

  useEffect(() => {
    request.get(`/movie-api/comments/${movieId}`)
      .then(res => {
        setComments(res.body)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [])

  return (
    <Paper classes={classes.commentsContainer}>
      <CommentForm />
      <Container >
        {
          comments && comments.map(comment => {
            return (<Comment key={comment.id} comment={comment} />)
          })
        }
      </Container>
    </Paper>)
}

export default connect()(Comments)

Comments.propTypes = {
  movieId: PropTypes.number
}
