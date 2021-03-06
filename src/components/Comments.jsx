import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Typography, Container, Paper, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import request from 'superagent'

import Comment from './Comment'
import CommentForm from './CommentForm'
import { CommentsStyles } from '../style/muiStyles'

const Comments = ({ movieId, title }) => {
  const classes = CommentsStyles()

  const [comments, setComments] = useState([])
  const [dummy, setDummy] = useState(1)

  useEffect(() => {
    request.get(`/movie-api/comments/${movieId}`)
      .then(res => {
        setComments(res.body)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [dummy, movieId])

  return (
    <Paper classes={classes.commentsContainer} square>
      <Container>
        <Grid container justify="center" >
          <Grid item xs={6} className={classes.commentsList}>
            {
              comments && comments.length > 0 ? comments.map(comment => <Comment key={comment.id} comment={comment} thing={setDummy}/>)
                : (
                  <>
                  <Typography variant="h6" className={classes.noCommentsTitle}>
                    No Comments yet
                  </Typography>
                  <Typography className={classes.noCommentsDesc}>
                    {`Be the first to rate and comment on ${title}`}
                  </Typography>
                  </>
                )
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
  movieId: PropTypes.number,
  title: PropTypes.string
}
