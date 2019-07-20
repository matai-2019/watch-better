import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button, Typography } from '@material-ui/core'

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

  getResult = () => {
    function result (array) {
      return array.filter(value => value > 0).length
    }

    const result1 = () => {
      if (result(this.test1) === 2) return true
    } 
    const result2 = () => {
      if (result(this.test2) === 1) return true
    } 
    const result3 = () => {
      if (result(this.test3) === 3) return true
    } 
    const result4 = () => {
      if (result(this.test4) === 3) return true
    } 
    const result5 = () => {
      if (result(this.test5) > 4) return true
    } 
  }

  rendered = () => {
    if (this.state.isVisible) {
      let inputField =  <><TextField
          id="standard-search"
          label="Movie Title"
          type="search"
          // className={classes.textField}
          margin="normal"
          onChange={this.handleName}
        />

        <Button onClick={this.handleSubmit} variant="outlined" color="primary">Start</Button>

        <br />
        <br /></>
    } else if (!this.state.isVisible) {
      let questions = data.map(el => <QuizQuestion key={el.id} handleChange={this.handleChange} question={el.question} id={el.id} test={el.test} />)
    } else if (this.state.displayAnswers) {
      let answer = <Typography variant="p"><p>{`${this.state.title} passes ALL THE TESTS!!!`}</p></Typography >
    }
  }

  render () {
    return(
      {rendered}
    )
}
}


export default Quiz