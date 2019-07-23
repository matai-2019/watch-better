import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container, Paper, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { CommentsStyles } from '../style/muiStyles'
// import { getCommentAPI } from '../utilities/api'

const request = require('superagent')

const Comments = ({ movieId }) => {
  const classes = CommentsStyles()

  const [comments, setComments] = useState([])
  const [dummy, setDummy] = useState('')

  useEffect(() => {
    request.get(`/movie-api/comments/${movieId}`)
      .then(res => {
        setComments(res.body)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [dummy])

  return (
    <Paper classes={classes.commentsContainer}>
      <Container>
        <Grid container justify="center" >
          <Grid item xs={6} className={classes.commentsList}>
            {
              comments && comments.map(comment => {
                return (<Comment key={comment.id} comment={comment} />)
              })
            }
          </Grid>
          <Grid item xs={6}>
            <CommentForm userid={comments.userId} thing={setDummy}/>
          </Grid>
        </Grid>
      </Container>
    </Paper>)
}

export default connect()(Comments)

Comments.propTypes = {
  movieId: PropTypes.number
}
