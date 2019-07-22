import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container, Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@material-ui/core'

import { QuizQuestionStyles } from '../style/muiStyles'
import { setAnswer } from '../actions/quizAnswer'

const QuizQuestion = ({ question, id, test, handleResult, dispatch, isActive }, ...props) => {
  const classes = QuizQuestionStyles()

  const handleAnswer = (id, answer) => {
    const userInput = {
      id: id,
      answer: answer
    }
    dispatch(setAnswer(userInput))
  }

  return (
    <Container>
      <Box boxShadow={0} elevation={0}>
        <FormControl required={true} component="fieldset">
          <FormLabel component="legend" className={classes.question}>{question}</FormLabel>
          <RadioGroup
            aria-label={test}
            onChange={(e) => handleAnswer(id, e.target.value)}
            name={id}
          >
            <FormControlLabel disabled={isActive} className={classes.question} value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel disabled={isActive} className={classes.question} value="no" control={<Radio color="primary"/>} label="No" />
            <FormControlLabel disabled={isActive} className={classes.question} value="unknown" control={<Radio color="primary"/>} label="Unknown" />
          </RadioGroup>
        </FormControl>
      </Box>
      <hr/>
      <br/>
      {id === '17' && <Button className={classes.button} variant="contained" color="primary" onClick={handleResult}>Submit</Button> }
    </Container>
  )
}

QuizQuestion.propTypes = {
  id: PropTypes.string,
  question: PropTypes.string,
  test: PropTypes.string,
  handleChange: PropTypes.func,
  handleResult: PropTypes.func,
  title: PropTypes.string,
  dispatch: PropTypes.func,
  isActive: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    questions: state.question
  }
}

export default connect(mapStateToProps)(QuizQuestion)
