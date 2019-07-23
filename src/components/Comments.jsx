import React from 'react'
import { connect } from 'react-redux'
import { Container, Typography } from '@material-ui/core'

import Comment from './Comment' 

class Comments extends React.Component {

  state = {
    comment: '',
    userRating: ''
  }

  data = [
    {
      id: 1,
      movie_id: 2,
      name: 'Jared Tasker',
      user_id: 2,
      comment: 'HOW sexy is Chris Hemsworth?!?!? omg omg omg',
      user_rating: 2,
      created: '2019-07-23 00:31:46'
    },
    {
      id: 2,
      movie_id: 2,
      name: 'Raaya Pathare',
      user_id: 3,
      comment: 'This movie rules',
      user_rating: 2,
      created: '2019-07-23 00:52:46'
    }
  ]

  render () {
    return (
      <Container fixed>
        {this.data.map(comment => {
          return <Comment 
          key={comment.id} 
          movie_id={comment.movie_id}
          name={comment.name}
          user_id={comment.user_id} 
          comment={comment.comment}
          user_rating={comment.user_rating}
          created={comment.created} />
        })}
      </Container>
    )
  }
}

export default connect()(Comments)