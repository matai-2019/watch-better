import React from 'react'
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, TextField, Button } from '@material-ui/core'

import QuizQuestion from './QuizQuestion'
import data from '../data/quizQuestions.js'

class Quiz extends React.Component {

  state = {
    title: '',
    isVisible: true,
    answers: {
      t1: [],
      t2: []
    }
  }

  handleName = e => {
    this.setState({
      title: e.target.value
    })
  }
  
  test1 = []
  test2 = []
  test3 = []
  test4 = []
  test5 = []
 

  handleChange = (value, id) => {
  console.log(`test1: ${this.test1}`)
  console.log(`test2: ${this.test2}`)
  console.log(`test3: ${this.test3}`)
  console.log(`test4: ${this.test4}`)
  console.log(`test5: ${this.test5}`)

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

  handleSubmit = () => {
    this.setState({
      isVisible:false
    })
  }

  render () {
    return this.state.isVisible ? 
      <>
        <TextField
          id="standard-search"
          label="Movie Title"
          type="search"
          // className={classes.textField}
          margin="normal"
          onChange={this.handleName}
        />
        <Button onClick={this.handleSubmit}variant="outlined" color="primary">Start</Button>
        <br />
        <br />
      </>
        : data.map(el => <QuizQuestion key={el.id} handleChange={this.handleChange} question={el.question} id={el.id} test={el.test} />)
  }
}


export default Quiz