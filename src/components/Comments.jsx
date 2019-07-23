import React from 'react'
import { connect } from 'react-redux'
import { Container, Paper } from '@material-ui/core'

import Comment from './Comment'
import CommentForm from './CommentForm'
import { CommentsStyles } from '../style/muiStyles'
import { getCommentAPI } from '../utilities/api'

const Comments = () => {
  const classes = CommentsStyles()
  // state = {
  //   comment: '',
  //   userRating: ''
  // }

  // const data = [
  //   {
  //     id: 1,
  //     movie_id: 2,
  //     name: 'Jared Tasker',
  //     user_id: 2,
  //     comment: 'HOW sexy is Chris Hemsworth?!?!? omg omg omg',
  //     user_rating: 5,
  //     created: '2019-07-23 00:31:46'
  //   },
  //   {
  //     id: 2,
  //     movie_id: 2,
  //     name: 'Raaya Pathare',
  //     user_id: 3,
  //     comment: 'This movie rules',
  //     user_rating: 4,
  //     created: '2019-07-23 00:52:46'
  //   },
  //   {
  //     id: 2,
  //     movie_id: 2,
  //     name: 'Jennie Watson',
  //     user_id: 1,
  //     comment: 'This movie is alright',
  //     user_rating: 3,
  //     created: '2019-07-23 00:53:46'
  //   }
  // ]

  const getComments = () => {
    return getCommentAPI(2)
      .then(comments => {
        console.log(comments)
        return comments
      })
      .catch(err => {
        console.error(err)
      //  dispatch error message when connected to the store (dispatch(error?(err.message))
      })
  }

  console.log(getComments(2))
  return (
    <Paper classes={classes.commentsContainer}>
      <CommentForm />
      <Container >
        {/* {getComments()
        // .map(comment => {
        //   return <Comment
        //     key={comment.id}
        //     movie_id={comment.movie_id}
        //     name={comment.name}
        //     user_id={comment.user_id}
        //     comment={comment.comment}
        //     user_rating={comment.user_rating}
        //     created={comment.created} />
        // })
        } */}
      </Container>
    </Paper>
  )
}

export default connect()(Comments)
