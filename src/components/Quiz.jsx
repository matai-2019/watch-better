import React from 'react'
import { Container, TextField, Button, Typography, List, ListItem } from '@material-ui/core'

import { QuizStyles } from '../style/muiStyles'
import QuizQuestion from './QuizQuestion'
import data from '../data/quizQuestions.js'

class Quiz extends React.Component {
  state = {
    title: '',
    isVisible: true,
    displayAnswers: false
  }

  test1 = []
  test2 = []
  test3 = []
  test4 = []
  test5 = []

  // classes = (props) => {
  //   QuizStyles(props)
  // }

  handleTitle = e => {
    this.setState({
      title: e.target.value
    })
  }

  onSubmit = () => {
    this.setState({
      isVisible:false
    })
  }

  handleResult = () => {
    this.setState({
      displayAnswers: true
    })
  }
  
  handleChange = (value, id) => {
    switch (id) {
      case '1':
      case '2':
        this.test1.push(value)
        return this.test1
      case '3':
        this.test2.push(value)
        return this.test2 
      case '4':
      case '5': 
      case '6':
        this.test3.push(value)
        return this.test3 
      case '7':
      case '8': 
      case '9':
        this.test4.push(value)
        return this.test4
      case '10':
      case '11': 
      case '12':
      case '13':
      case '14': 
      case '15':
      case '16': 
      case '17':
        this.test5.push(value)
        return this.test5
      default:
      console.log('whoops')
    }
  }

  result = (array) => {
    return array.filter(value => value > 0).length
  }

  bechdel = () => {
    if (this.result(this.test1) === 2) {
      return 'Passed the Bechdel Test' 
    } else return 'Failed the Bechdel Test'
  } 
    
  reesDavies = () => {
    if (this.result(this.test2) === 1) {
      return 'Passed the Rees-Davies Test'
    } else return 'Failed the Rees-Davies Test'
  } 

  ko = () => {
    if (this.result(this.test3) === 3) {
      return 'Passed the Ko Test' 
    } else return 'Failed the Ko Test'
  } 

  landau = () => {
    if (this.result(this.test4) === 3) {
      return 'Passed the Landau Test'
    } else return 'Failed the Landau Test'
  } 

  feldman = () => {
    if (this.result(this.test5) > 4) { 
      return 'Passed the Feldman Test' 
    } else return 'Failed the Feldman Test'
  } 

  render () {
    if (this.state.displayAnswers) {
      return (
        <Container>
          <Typography variant="h4" component="h4">
            {`${this.state.title} has:`}
          </Typography>
          <List >
            <ListItem><Typography variant="h5" gutterBottom>{this.bechdel()}</Typography></ListItem>
            <ListItem><Typography variant="h5" gutterBottom>{this.reesDavies()}</Typography></ListItem>
            <ListItem><Typography variant="h5" gutterBottom>{this.ko()}</Typography></ListItem>
            <ListItem><Typography variant="h5" gutterBottom>{this.landau()}</Typography></ListItem>
            <ListItem><Typography variant="h5" gutterBottom>{this.feldman()}</Typography></ListItem>
          </List>
        </Container>
    )} else if (this.state.isVisible) {
      return(
        <Container>
          <TextField
            id="standard-search"
            label="Movie Title"
            type="search"
            margin="normal"
            onChange={this.handleTitle}
          />
          <Button onClick={this.onSubmit} variant="outlined" color="primary">Start</Button>
          <br />
          <br />
        </Container>
      )
    } else if (!this.state.isVisible) {
      return (
        data.map(el => <QuizQuestion handleResult={this.handleResult} key={el.id} handleChange={this.handleChange} question={el.question} id={el.id} test={el.test} title={this.state.title}/>
      ))
    }
  }
}

export default Quiz
