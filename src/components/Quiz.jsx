import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Container, TextField, Button, Typography, List, ListItem } from '@material-ui/core'

import { QuizStyles } from '../style/muiStyles'
import QuizQuestion from './QuizQuestion'
import data from '../data/quizQuestions.js'
import { QuizStyle } from '../style/muiStyles'

const Quiz = (props) => {
  const classes = QuizStyles(props)

  const [title, setTitle] = useState('')
  const [isVisible, setVisible] = useState(true)
  const [displayAnswer, setDisplayAnswer] = useState(false)

  const test1 = []
  const test2 = []
  const test3 = []
  const test4 = []
  const test5 = []

  const handleTitle = e => {
    setTitle(e.target.value)
  }

  const onSubmit = () => {
    setVisible(false)
  }

  const handleResult = () => {
    setDisplayAnswer(true)
  }

  const handleChange = (value, id) => {
    switch (id) {
      case '1':
      case '2':
        test1.push(value)
        return test1
      case '3':
        test2.push(value)
        return test2
      case '4':
      case '5':
      case '6':
        test3.push(value)
        return test3
      case '7':
      case '8':
      case '9':
        test4.push(value)
        return test4
      case '10':
      case '11':
      case '12':
      case '13':
      case '14':
      case '15':
      case '16':
      case '17':
        test5.push(value)
        return test5
      default:
        console.log('whoops')
    }
  }

  const result = (array) => {
    return array.filter(value => value > 0).length
  }

  const bechdel = () => {
    if (result(test1) === 2) {
      return 'Passed the Bechdel Test'
    } else return 'Failed the Bechdel Test'
  }

  const reesDavies = () => {
    if (result(test2) === 1) {
      return 'Passed the Rees-Davies Test'
    } else return 'Failed the Rees-Davies Test'
  }

  const ko = () => {
    if (result(test3) === 3) {
      return 'Passed the Ko Test' 
    } else return 'Failed the Ko Test'
  }

  const landau = () => {
    if (result(test4) === 3) {
      return 'Passed the Landau Test'
    } else return 'Failed the Landau Test'
  }

  const feldman = () => {
    if (result(test5) > 4) { 
      return 'Passed the Feldman Test' 
    } else return 'Failed the Feldman Test'
  }

  if (displayAnswer) {
    console.log(title)
    return (
      <Container className={classes.content}>
        <Typography variant="h4" component="h4">
          {`${title} has:`}
        </Typography>
        <List>
          <ListItem><Typography variant="h5" gutterBottom>{bechdel()}</Typography></ListItem>
          <ListItem><Typography variant="h5" gutterBottom>{reesDavies()}</Typography></ListItem>
          <ListItem><Typography variant="h5" gutterBottom>{ko()}</Typography></ListItem>
          <ListItem><Typography variant="h5" gutterBottom>{landau()}</Typography></ListItem>
          <ListItem><Typography variant="h5" gutterBottom>{feldman()}</Typography></ListItem>
        </List>
      </Container>
    )
  } else if (isVisible) {
    return (
      <Container className={classes.title}>
        <TextField
          id="standard-search"
          label="Movie Title"
          type="search"
          margin="normal"
          onChange={handleTitle}
        />
        <Button onClick={onSubmit} variant="outlined" color="primary">Start</Button>
        <br />
        <br />
      </Container>
    )
  } else if (!isVisible) {
    return (
      <Container className={classes.content}>
        {data.map(el => <QuizQuestion classes={classes.question} handleResult={handleResult} key={el.id} handleChange={handleChange} question={el.question} id={el.id} test={el.test} title={title}/>
        )}
      </Container>
    )  
  }
}

export default Quiz
