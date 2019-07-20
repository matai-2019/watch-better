import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button, Typography, List, ListItem, ListItemText } from '@material-ui/core'

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

  handleName = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = () => {
    this.setState({
      isVisible:false
    })
  }
  
  handleChange = (value, id) => {
    switch (id) {
      case '1':
      case '2':
        this.test1.push(value)
        return this.test1
      break
        this.test1.push(value)
        return this.test1
      break
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

  handleResult = () => {
    this.setState({
      displayAnswers: true
    })
  }

  render () {
    if (this.state.displayAnswers) {
      return (
    <List >
      <ListItem>
        <ListItemText primary={this.bechdel()} />
      </ListItem>
      <ListItem>
        <ListItemText primary={this.reesDavies()}/>
      </ListItem>
      <ListItem>
        <ListItemText primary={this.ko()} />
      </ListItem>
            <ListItem>
        <ListItemText primary={this.landau()} />
      </ListItem>
            <ListItem>
        <ListItemText primary={this.feldman()} />
      </ListItem>
    </List>

  )} else if (this.state.isVisible) {
      return(
        <>
        <TextField
          id="standard-search"
          label="Movie Title"
          type="search"
          // className={classes.textField}
          margin="normal"
          onChange={this.handleName}
        />

        <Button onClick={this.handleSubmit} variant="outlined" color="primary">Start</Button>

        <br />
        <br />
        </>
      )
    } else if (!this.state.isVisible) {
      return (
        data.map(el => <QuizQuestion handleResult={this.handleResult} key={el.id} handleChange={this.handleChange} question={el.question} id={el.id} test={el.test} />
      ))
}
}
}


export default Quiz